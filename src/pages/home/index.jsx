import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './module/action';
import { Button } from 'antd';

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
        </Button>
      </div>
    );
  }
}

export default Home;
