import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Checkbox, Button} from '@icedesign/base';

export default class TermsInfo extends Component {
  static displayName = 'TermsInfo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IceContainer>
        <h1 style={styles.title}>星云真相链使用帮助</h1>

        <div style={styles.content}>
          <p style={styles.desc}>
            <span style={styles.importantText}>
              星云真相链是基于NAS智能合约的去中心化真相爆料、谣言辟谣平台。
            </span>
            可以帮助您永久安全保存数据到区块链，不可篡改。让谣言无处遁形，让真相浮出水面！
            现已同时支持PC浏览器端和手机移动端提起交易，支持文章赞和踩。
          </p>
          <p style={styles.desc}>
            本站的数据是存放在星云区块链智能合约上的。区块链是分布式数据存储、点对点传输、共识机制、加密算法等计算机技术的新型应用模式。
            区块链具有去中心化、开放性、自治性、信息不可篡改、匿名性等特征。
          </p>
          <p style={styles.desc}>
            借助于区块链技术的驱动，本站可以实现真相、谣言、文章评价数据的永久保存、不可篡改，再也不怕真相被封等信息丢失等问题。
            同时，区块链还具有匿名的特性，您可以发表自己的观点，而没有人知道您是谁。
          </p>

          <p style={styles.desc}>
            <span style={styles.importantText}>
               简单来讲，我们已采取符合业界最新技术标准（区块链）、合理可行的安全防护措施保护您提供的个人数据安全，保证数据的安全性、匿名性！
            </span>
          </p>

          <p style={styles.desc}>
            <div style={styles.importantText}>
              如果您在使用“星云真相链”网站时有任何地方需要帮助，可以通过此链接给我们反馈，星云真相链团队会在第一时间进行回复：
              <a href="https://github.com/kun368/NasVeritas/issues/new"
                 target="_blank">https://github.com/kun368/NasVeritas/issues/new</a>
            </div>
          </p>

          <hr/>
          <h1>通过网页版钱包插件使用星云真相链：</h1>
          <p style={styles.desc}>
            第一步：推荐下载使用Chrome浏览器，并安装WebExtensionWallet扩展，扩展下载地址：
            <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">
              https://github.com/ChengOrangeJu/WebExtensionWallet
            </a>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/82607678.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/81941861.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/66738463.jpg"/>
          </p>
          <p style={styles.desc}>
            第二步，打开本站，点击：
            <a href="/#/Create" target="_blank">
              “爆料真相/谣言”选项卡
            </a>，创建一个新文章，支持手机钱包交易和浏览器插件直接交易
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/77584937.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/36145475.jpg"/>
          </p>
          <p style={styles.desc}>
            第三步，点击：
            <a href="/#/List" target="_blank">
              “真相/谣言市场”选项卡
            </a>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/21521993.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/83528890.jpg"/>
          </p>
          <p style={styles.desc}>
            第四步，您还可以同样的交易方式，对文章进行支持或者反对，同样支持手机钱包交易和浏览器插件直接交易
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/24113302.jpg"/>
          </p>

          <hr/>
          <h1>通过移动版手机钱包插件使用星云真相链：</h1>
          <p style={styles.desc}>
            第一步：推荐下载使用Chrome浏览器，并安装WebExtensionWallet扩展，扩展下载地址：
            <a href="https://github.com/ChengOrangeJu/WebExtensionWallet" target="_blank">
              https://github.com/ChengOrangeJu/WebExtensionWallet
            </a>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/82607678.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/81941861.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/66738463.jpg"/>
          </p>
          <p style={styles.desc}>
            第二步，打开本站，点击：
            <a href="/#/Create" target="_blank">
              “爆料真相/谣言”选项卡
            </a>，创建一个新文章，支持手机钱包交易和浏览器插件直接交易
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/77584937.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/36145475.jpg"/>
          </p>
          <p style={styles.desc}>
            第三步，打开星云钱包APP<br/>
            <img style={styles.myAutoImgPhone}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/70130081.jpg"/>
          </p>
          <p style={styles.desc}><br/>
            第四步，点击首页的“我要转账”，选择转账方式为：扫码<br/>
            <img style={styles.myAutoImgPhone}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/53289110.jpg"/>
          </p>
          <p style={styles.desc}>
            第五步，扫码后，输入密码确认交易，文件开始上链<br/>
            <img style={styles.myAutoImgPhone}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/8578306.jpg"/>
          </p>
          <p style={styles.desc}>
            第六步，交易后提示发起交易成功<br/>
            <img style={styles.myAutoImgPhone}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/97014788.jpg"/>
          </p>
          <p style={styles.desc}>
            第七步，点击：
            <a href="/#/List" target="_blank">
              “真相/谣言市场”选项卡
            </a>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/21521993.jpg"/>
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/83528890.jpg"/>
          </p>
          <p style={styles.desc}>
            第八步，您还可以同样的交易方式，对文章进行支持或者反对，同样支持手机钱包交易和浏览器插件直接交易
            <img style={styles.myAutoImg}
                 src="http://zzkun-tuchuang.oss-cn-hangzhou.aliyuncs.com/18-5-30/24113302.jpg"/>
          </p>

        </div>

        <br/>
        <div style={styles.btn}>
          <Button
            type="primary"
            size="large"
            component="a"
            href="/#/"
          >
            开始使用
          </Button>
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
    paddingBottom: '20px',
    fontSize: '20px',
    borderBottom: '1px solid #dedede',
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

  importantText: {
    color: '#6633ff',
    fontWeight: 900,
  },
  myAutoImg: {
    backgroundSize: 'contain|cover',
    width: '100%',
    height: 'auto',
    margin: '15px',
    borderRadius: '5%',
    border: '3px solid burlywood'
  },
  myAutoImgPhone: {
    backgroundSize: 'contain|cover',
    width: '50%',
    height: 'auto',
    margin: '15px',
    borderRadius: '5%',
    border: '3px solid burlywood',
    textAlign: 'center',
  }
};
