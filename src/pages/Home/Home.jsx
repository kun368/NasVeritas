import React, { Component } from 'react';
import IntroBanner from "./components/IntroBanner/IntroBanner";
import AblityItems from "./components/AblityItems/AblityItems";
import { Dialog } from '@icedesign/base';

export default class Home extends Component {
  static displayName = 'Home';

  constructor(props) {
    super(props);
    this.state = {
      welcomeDialogShow: true,
    };
  }

  onWelcomeDialogClose = () => {
    this.setState({
      welcomeDialogShow: false
    });
  };

  renderWelcomeDialog() {
    return (
      <Dialog
        visible={this.state.welcomeDialogShow}
        onOk={this.onWelcomeDialogClose}
        closable="esc,mask,close"
        onCancel={this.onWelcomeDialogClose}
        onClose={this.onWelcomeDialogClose}
        title="欢迎体验星云真相链！"
      >
        <p style={{color: 'red'}}>星云真相链隆重上线，可跨平台使用，率先支持四种使用方式，并添加详细的使用帮助，让真相无处不在！</p>
        <ul>
          <li>方法一. Chrome浏览器打开本应用，安装WebExtensionWallet扩展，使用扩展本身交易</li>
          <li>方法二. Chrome浏览器打开本应用，安装WebExtensionWallet扩展和NAS手机钱包，使用手机扫码交易</li>
          <li>方法三. 手机/平板浏览器打开星云健身助手，上传文件时自动调用钱包交易（只需要安装NAS手机钱包）</li>
          <li>方法四. 直接在NAS手机钱包DApp市场里选择本应用使用</li>
        </ul>
        <p style={{color: 'red'}}>更多功能还在不断添加中，更多详细使用方式请查看使用帮助手册！</p>
      </Dialog>
    );
  }

  render() {
    return (
      <div className="home-page">
        {this.renderWelcomeDialog()}
        <IntroBanner/>
        <AblityItems/>
      </div>
    );
  }
}
