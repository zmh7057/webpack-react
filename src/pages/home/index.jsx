import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './module/action';
import { Button } from 'antd';
import { formatTime } from 'tmaito-utils';
import './style/index.scss';

@connect(
  state => state.Home,
  dispatch => bindActionCreators({ ...actions }, dispatch)
)
class Home extends Component {
  toggleLoading = () => {
    const { loading, percent, handleUpdate } = this.props;
    handleUpdate({
      loading: !loading,
      percent: percent === 100 ? 10 : percent + 10
    });
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="page">
        <Button type="primary" onClick={this.toggleLoading}>
          {loading ? 'loading' : 'unLoading'}
          {formatTime(Date.now(), 'YYYY-MM-DD')}
        </Button>
      </div>
    );
  }
}

export default Home;
