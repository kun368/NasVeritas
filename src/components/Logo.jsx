import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import {Icon} from "@icedesign/base";

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo" style={this.props.style}>
        <Icon
          style={{color: 'blue'}}
          type="select"
          size="xl"
        />
        <Link to="/" className="logo-text">
          星云真相
        </Link>
      </div>
    );
  }
}
