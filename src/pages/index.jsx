import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import routes from '@/routes';
import Header from './common/Header';

class Pages extends Component {
  render() {
    return (
      <>
        <Header />
        <Layout className="xforce-layout">
          {/* <Menus /> */}
          <Layout>
            <Switch>
              {routes.map(route => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  render={route.render}
                  component={route.component}
                />
              ))}
            </Switch>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default Pages;
