import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Feedback } from '@icedesign/base';
import NebUtils from '../../../../util/NebUtils.js'
import {Base64} from 'js-base64';

const Toast = Feedback.toast;

const dict = {
  up: '置顶',
  hot: '热',
  new: '新',
};

export default class SystemNoticeList extends Component {
  static displayName = 'SystemNoticeList';

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  transformDataSource(resp) {
    resp = resp.reverse();
    for (let i = 0; i < 3 && i < resp.length; ++i) {
      resp[i].tag = 'new';
    }
    return resp.map(it => {
      return {
        title: Base64.decode(it.title),
        tag: it.tag,
        href: `/#/Detail/${it.txHash}`,
        time: new Date(it.time).toLocaleString(),
      }
    })
  }

  componentDidMount() {
    NebUtils.userCallAxios(
      "queryAllTopics",
      `[]`,
      resp => {
        Toast.success("获取真相/谣言数据成功");
        this.setState({
          dataSource: this.transformDataSource(resp),
        })
      },
    );
  }

  render() {
    const dataSource = this.state.dataSource;
    console.log(dataSource);

    return (
      <div className="system-notice-list">
        <IceContainer>
          <div className="notice-list-content">
            <h2 style={styles.title}>真相/谣言看板</h2>
            <ul style={styles.noticeList}>
              {dataSource.map((item, index) => {
                return (
                  <li key={index} style={styles.noticeItem}>
                    <a href={item.href} style={styles.noticeTitle}>
                      {item.title}
                    </a>
                    {item.tag && (
                      <span
                        style={{ ...styles.noticeTag, ...styles[item.tag] }}
                      >
                        {dict[item.tag]}
                      </span>
                    )}
                    <span style={styles.noticeTime}>{item.time}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  title: {
    margin: '0 0 10px',
    fontSize: '18px',
  },
  noticeList: {
    margin: 0,
    padding: 0,
  },
  noticeItem: {
    position: 'relative',
    padding: '12px 0',
    paddingRight: '65px',
    listStyle: 'none',
    borderBottom: '1px solid #F4F4F4',
  },
  noticeTitle: {
    fontSize: '14px',
    color: '#666',
    textDecoration: 'none',
  },
  noticeTag: {
    fontSize: '12px',
    padding: '2px 6px',
    borderRadius: '8px',
    marginLeft: '5px',
  },
  noticeTime: {
    position: 'absolute',
    right: '0px',
    top: '15px',
    fontSize: '12px',
    color: '#999',
  },
  paginationWrap: {
    marginTop: '20px',
    textAlign: 'right',
  },
  up: {
    color: '#4296ff',
    background: '#eff6ff',
  },
  new: {
    color: '#fca61c',
    background: '#fff4e2',
  },
  hot: {
    color: '#f86d6d',
    background: '#ffe8e8',
  },
};
