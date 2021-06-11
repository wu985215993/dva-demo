import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import dynamic from 'dva/dynamic';
import app from './index'
// import IndexPage from "./routes/IndexPage";
import Login from "./routes/login/index";
import Reg from "./routes/reg/index";
const IndexPage = dynamic({
  app,
  // models: () => [
  //   // import('./models/users'),
  // ],
  component: () => import('./routes/IndexPage'),
});

function RouterConfig({ history }) {
  return (
    <React.Suspense fallback={<div>加载中...</div>}>
    <Router history={history}>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
      </Switch>
    </Router>
    </React.Suspense>
  );
}

export default RouterConfig;
