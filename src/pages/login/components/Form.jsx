import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ACCOUNT } from '@/constants';

const { Item } = Form;

const LoginForm = props => {
  const { history, location } = props;
  const [loading, setLoading] = useState(false);

  const onFinish = values => {
    const { username, password } = values;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (ACCOUNT.includes(username) && password === '1qazXSW@') {
        sessionStorage.setItem('x-xforceplus-melete-sign', '1qazxSW@#EDCvfr45tgbMJU&!@#$%^');
        history.push(location.hash.substr(1) || '/');
      } else {
        message.error('用户名或密码错误');
      }
    }, 2000);
  };
  const onFinishFailed = errorInfo => {
    // console.log('Failed:', errorInfo);
  };
  return (
    <Form className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Item>
        <div className="login-form-header">智能文档对比系统</div>
      </Item>
      <Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input
          size="large"
          prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="admin"
        />
      </Item>
      <Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password size="large" placeholder="password" />
      </Item>
      <Item className="align-center">
        <Button
          type="primary"
          shape="round"
          size="large"
          loading={loading}
          htmlType="submit"
          className="login-form-button">
          马上登录
        </Button>
      </Item>
    </Form>
  );
};

export default withRouter(LoginForm);
