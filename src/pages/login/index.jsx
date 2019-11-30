import React, { Component } from 'react';
import Form from './components/Form';

import './style/index.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="bg" />
        <div className="bg-1" />
        <div className="bg-2" />
        <div className="logo" />
        <Form />
      </div>
    );
  }
}

export default Login;
