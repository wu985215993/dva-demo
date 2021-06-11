import React from "react";
// eslint-disable-next-line
import { connect } from "dva";
import styles from "./IndexPage.css";
import { Switch, Route, Redirect, NavLink } from "dva/router";
import Person from "./person";
import Goods from "./goods";

export default function IndexPage() {
  return (
    <div className={styles.home}>
      <div className={styles.leftBox}>
        <div>
          <div>
            <NavLink to="/home/person" activeStyle={{ color: "red" }}>
              人员管理
            </NavLink>
          </div>
          <div>
            <NavLink to="/home/goods" activeStyle={{ color: "red" }}>
              商品管理
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.rightBox}>
        <Switch>
          <Redirect exact from="/home" to="/home/person" />
          <Route path="/home/person" component={Person} />
          <Route path="/home/goods" component={Goods} />
        </Switch>
      </div>
    </div>
  );
}
