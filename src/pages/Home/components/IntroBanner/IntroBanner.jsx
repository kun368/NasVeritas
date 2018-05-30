import React, {Component} from 'react';
import PropTypes from 'prop-types';

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '1920px',
    height: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: '#000',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'absolute',
    top: '112px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '40px',
    color: '#fff',
    pointerEvents: 'none',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '50px',
    lineHeight: '70px',
  },
  introBannerSubtitleStyles: {
    marginTop: '8px',
    marginBottom: '48px',
    maxWidth: '768px',
    fontSize: '16px',
    lineHeight: '25px',
  },
};

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {
    href: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="intro-banner-wrap"
        style={style.introBannerWrapStyles}>
        <img
          className="intro-banner-img"
          src="https://img.alicdn.com/tfs/TB1R9Ius1uSBuNjy1XcXXcYjFXa-3840-900.jpg"
          style={style.introBannerImgStyles}/>
        <div className="intro-banner-img-mask" style={style.introBannerImgMaskStyles}></div>
        <div className="intro-banner-text" style={style.introBannerTextStyles}>
          <h2 className="intro-banner-title" style={style.introBannerTitleStyles}>不问立场，不求利益，只求真相！</h2>
          <p className="intro-banner-subtitle"
             style={style.introBannerSubtitleStyles}>
            基于NAS智能合约的去中心化真相爆料、谣言辟谣平台。
            可以帮助您永久安全保存数据到区块链，不可篡改。让谣言无处遁形，让真相浮出水面！
            现已同时支持PC浏览器端和手机移动端提起交易，支持文章赞和踩。
          </p>
        </div>
      </div>
    );
  }
}
