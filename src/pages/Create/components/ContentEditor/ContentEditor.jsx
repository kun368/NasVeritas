import React, {Component} from 'react';
import IceContainer from '@icedesign/container';
import {Input, Grid, Form, Button, Select, Feedback} from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import NebUtils from '../../../../util/NebUtils.js'
import {Base64} from 'js-base64';

const {Row, Col} = Grid;
const FormItem = Form.Item;
const Toast = Feedback.toast;

export default class ContentEditor extends Component {
  static displayName = 'ContentEditor';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        title: '',
        desc: '',
      },
    };
  }

  formChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = (showQrCode) => {
    this.postForm.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
      if (errors) {
        return false;
      }
      if (!NebUtils.checkInstalledPlugin()) {
        Toast.error('还未安装Chrome扩展，请点击页面上方的下载按钮！');
      }

      const contract = {
        function: 'postTopic',
        args: `["${Base64.encode(values.title)}", "${Base64.encode(values.desc)}"]`,
      };
      NebUtils.nebPayCall(contract.function, contract.args, showQrCode, (txHash) => {
        Toast.success("已提交交易，交易成功即爆料真相/辟谣成功！")
      });
    });
  };

  render() {
    return (
      <div className="content-editor">
        <IceFormBinderWrapper
          ref={(refInstance) => {
            this.postForm = refInstance;
          }}
          value={this.state.value}
          onChange={this.formChange}
        >
          <IceContainer title="爆料真相/辟谣">
            <Form labelAlign="top" style={styles.form}>

              <Row>
                <Col span="24">
                  <FormItem label="标题" required>
                    <IceFormBinder name="title" required message="标题必填">
                      <Input placeholder="这里填写文章标题"/>
                    </IceFormBinder>
                    <IceFormError name="title"/>
                  </FormItem>
                </Col>
              </Row>

              <Row>
                <Col span="24">
                  <FormItem label="描述" required>
                    <IceFormBinder name="desc" required message="必填">
                      <Input
                        multiple
                        placeholder="这里填写正文描述"
                        rows={20}
                      />
                    </IceFormBinder>
                    <IceFormError name="desc"/>
                  </FormItem>
                </Col>
              </Row>

              <FormItem label=" ">
                <Button.Group>
                  <Button type="primary" onClick={this.handleSubmit.bind(this, false)}>
                    发布（网页钱包交易）
                  </Button>
                  <Button type="primary" onClick={this.handleSubmit.bind(this, true)}>
                    发布（手机钱包交易）
                  </Button>
                </Button.Group>

              </FormItem>
            </Form>
          </IceContainer>
        </IceFormBinderWrapper>
      </div>
    );
  }
}

const styles = {
  form: {
    marginTop: 30,
  },
  cats: {
    width: '100%',
  },
};
