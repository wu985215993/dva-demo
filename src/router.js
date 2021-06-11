import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import IndexPage from "./routes/IndexPage";
import Login from "./routes/login/index";
import Reg from "./routes/reg/index";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" component={IndexPage} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
