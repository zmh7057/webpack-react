import '@babel/polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Pages from './pages/index';
import Login from './pages/login';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import configureStore from './store/config';
import './assets/scss/index.scss';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <BrowserRouter basename="/">
            <Switch>
              <Route path="/login" component={Login} />
              <Route component={Pages} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </ConfigProvider>
    );
  }
}

render(<App />, document.querySelector('#app'));
