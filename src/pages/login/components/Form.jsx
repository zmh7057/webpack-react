import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button, message } from 'antd';
import { ACCOUNT } from '@/constants';
const { Item } = Form;
@withRouter
class LoginForm extends Component {
  state = {
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;
        const { history, location } = this.props;
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
          if (ACCOUNT.includes(username) && password === '1qazXSW@') {
            sessionStorage.setItem(
              'x-xforceplus-melete-sign',
              '1qazxSW@#EDCvfr45tgbMJU&!@#$%^'
            );
            history.push(location.hash.substr(1) || '/');
          } else {
            message.error('用户名或密码错误');
          }
        }, 2000);
      }
    });
  };

  render() {
    const { loading } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <Item>
          <div className="login-form-header">智能文档对比系统</div>
        </Item>
        <Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(
            <Input
              size="large"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="admin"
            />
          )}
        </Item>
        <Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(
            <Input
              size="large"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="请输入密码"
            />
          )}
        </Item>
        <Item className="align-center">
          <Button
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            loading={loading}
            className="login-form-button">
            马上登录
          </Button>
        </Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
