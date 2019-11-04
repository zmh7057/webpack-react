import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Popover } from 'antd';
import { withRouter } from 'react-router-dom';
import './style/header.scss';

import { updateHandler } from './module/action';
@connect(
  state => state.Common,
  dispatch =>
    bindActionCreators(
      {
        updateHandler
      },
      dispatch
    )
)
@withRouter
class HeaderComponent extends Component {
  logoutHandler = () => {
    const { history } = this.props;
    history.push('/login');
  };

  render() {
    return (
      <Row className="xforce-nav">
        <Col span={8} className="xforce-logo">
          <img
            className="logo rotate"
            src={require('../../assets/images/logo.png')}
            alt=""
          />
          <div className="name">智能文档对比系统</div>
        </Col>
        <Col span={16} className="xforce-quick-menu align-right">
          <div className="xforce-quick-menu-item">xxxx</div>
          <div className="xforce-quick-menu-item">xxxx</div>
          <div className="xforce-quick-menu-item">
            <Popover
              placement="bottomRight"
              overlayClassName="popover-user"
              content={
                <ul>
                  <li onClick={this.logoutHandler}>注销</li>
                </ul>
              }>
              <div className="icon-user" />
            </Popover>
          </div>
        </Col>
      </Row>
    );
  }
}

export default HeaderComponent;
