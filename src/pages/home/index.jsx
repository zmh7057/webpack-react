import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './module/action';
import { Button } from 'antd';
import { formatTime } from 'tmaito-utils';

import './style/index.scss';

@connect(
  state => state.Common,
  dispatch => bindActionCreators({ ...actions }, dispatch)
)
class Home extends Component {
  toggleLoading = () => {
    const { loading, updateHandler } = this.props;
    updateHandler({
      loading: !loading
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
