import React, { Component } from 'react';
import TermsInfo from './components/TermsInfo';
import {withRouter} from "react-router-dom";
import NebUtils from "../../util/NebUtils";
import { Feedback } from '@icedesign/base';

const Toast = Feedback.toast;

@withRouter
export default class Detail extends Component {
  static displayName = 'Detail';

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);

    NebUtils.userCallAxios(
      "queryOneTopic",
      `["${id}"]`,
      resp => {
        this.setState({
          dataSource: resp,
        })
      },
    );
  }

  render() {
    return (
      <div className="detail-page">
        <TermsInfo dataSource={this.state.dataSource}/>
      </div>
    );
  }
}
