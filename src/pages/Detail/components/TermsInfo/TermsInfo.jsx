import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Checkbox, Button, Feedback, Icon} from '@icedesign/base';
import {Base64} from 'js-base64';
import NebUtils from "../../../../util/NebUtils";

const Toast = Feedback.toast;

export default class TermsInfo extends Component {
  static displayName = 'TermsInfo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  postFeed(show, attitude) {
    if (!NebUtils.checkInstalledPlugin()) {
      Toast.error('还未安装Chrome扩展，体验全部功能请点击页面上方的下载按钮！');
    }

    const contract = {
      function: 'postFeed',
      args: `["${this.props.dataSource.topic.txHash}", "${attitude}"]`,
    };
    NebUtils.nebPayCall(contract.function, contract.args, show, (txHash) => {
      Toast.success("已提交交易，交易成功即评价本文成功！")
    });
  }

  extractFeedCount(type) {
    let feeds = this.props.dataSource.feeds;
    return feeds.filter(it => {
      return it.attitude === type;
    }).length;
  }

  render() {
    const dat = this.props.dataSource;
    if (!dat || !dat.topic) {
      return (
        <IceContainer>
          <div style={styles.content}>
            <p style={styles.desc}>
              获取数据中，请稍后...
            </p>
          </div>
        </IceContainer>
      );
    }

    const content = Base64.decode(dat.topic.content).split('\n').join("<br />");

    return (
      <IceContainer>
        <h1 style={styles.title}>{Base64.decode(dat.topic.title)}</h1>
        <h5 style={styles.subTitle}>发表人：{dat.topic.from}</h5>
        <h5 style={styles.subTitle}>发表时间：{new Date(dat.topic.time).toLocaleString()}</h5>
        <h5 style={styles.subTitle}>支持人数：{this.extractFeedCount("up")}，反对人数：{this.extractFeedCount("down")}</h5>
        <hr/>

        <div style={styles.content}>
          <p style={styles.desc} dangerouslySetInnerHTML={{__html: content}}>
          </p>
        </div>

        <br/>
        <div style={styles.btn}>
          <Button.Group>
            <Button type="primary" size="large" onClick={this.postFeed.bind(this, true, "up")}>
              <Icon type="good"/> 支持（手机钱包）
            </Button>
            <Button type="primary" size="large" onClick={this.postFeed.bind(this, false, "up")}>
              <Icon type="good"/> 支持（网页钱包）
            </Button>
          </Button.Group>
          <br/><br/>

          <Button.Group>
            <Button type="secondary" size="large" onClick={this.postFeed.bind(this, true, "down")}>
              <Icon type="bad"/> 反对（手机钱包）
            </Button>
            <Button type="secondary" size="large" onClick={this.postFeed.bind(this, false, "down")}>
              <Icon type="bad"/> 反对（网页钱包）
            </Button>
          </Button.Group>
        </div>
      </IceContainer>
    );
  }
}

const styles = {
  desc: {
    fontSize: '13px',
    lineHeight: '28px',
  },
  title: {
    textAlign: 'center',
    margin: 0,
    fontWeight: 999,
    paddingBottom: '10px',
    fontSize: '20px',
  },
  subTitle: {
    textAlign: 'center',
    margin: 0,
    paddingBottom: '10px',
    fontSize: '14px',
  },
  content: {
    color: '#666',
    fontSize: '16px',
    padding: '20px 0',
    borderBottom: '1px solid #dedede',
  },
  btn: {
    textAlign: 'center',
  },
};
