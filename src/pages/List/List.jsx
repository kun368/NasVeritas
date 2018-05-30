import React, { Component } from 'react';
import SystemNoticeList from './components/SystemNoticeList';

export default class List extends Component {
  static displayName = 'List';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="list-page">
        <SystemNoticeList />
      </div>
    );
  }
}
