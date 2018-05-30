import React, { Component } from 'react';
import PropTypes from 'prop-types';

const style = {
  hyAbilityStyles: {
    fontFamily: 'Microsoft YaHei',
    height: '223px',
    textAlign: 'center',
    background: '#fff',
  },
  hyAbilityItemStyle: {
    display: 'inline-block',
    width: '280px',
    margin: '38px 35px 0',
    verticalAlign: 'top',
  },
  hyAbilityItemImgStyle: {
    height: '62px',
  },
  hyAbilityItemTitleStyle: {
    fontSize: '20px',
    lineHeight: '26px',
    color: '#333',
    fontWeight: '400',
    margin: '18px 0 10px',
  },
  hyAbilityItemSubtitleStyle: {
    fontSize:'16px',
    color:'#999',
    lineHeight:'21px',
  },
};

export default class AblityItems extends Component {
  static displayName = 'AblityItems';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hy-ability" style={style.hyAbilityStyles}>
        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/aWimbMGxabytxrRqcnEU.svg"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>技术强劲</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>基于优秀的星云区块链智能合约</p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/neNAdNbBxUbWpbUQIsJA.svg"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>无中介</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>无中心组织 公平公正公开</p>
        </div>

        <div className="hy-ability-item" style={style.hyAbilityItemStyle}>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/SsStefBxcUWayMyktAwz.svg"
            style={style.hyAbilityItemImgStyle}/>
          <h3 style={style.hyAbilityItemTitleStyle}>只求真相</h3>
          <p style={style.hyAbilityItemSubtitleStyle}>让真相永远留存在区块链上</p>
        </div>
      </div>
    );
  }
}


