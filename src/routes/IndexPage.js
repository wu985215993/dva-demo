import React from "react";
// eslint-disable-next-line
import styles from "./IndexPage.css";
import { Switch, Route, Redirect, NavLink } from "dva/router";
import Person from "./person";
import Goods from "./goods";
import dynamic from "dva/dynamic";
import  app from "../index";
const Shopcart = dynamic({
  app,
  models: () => [import('../models/shopcart')],
  component: () => import('./shopcart/index'),
});
const Todolist = dynamic({
  app,
  models: () => [import('../models/todolist')],
  component: () => import('./todolist/index'),
});

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
          <div>
            <NavLink to="/home/shopcart" activeStyle={{ color: "red" }}>
              购物车
            </NavLink>
          </div>
          <div>
            <NavLink to="/home/todolist" activeStyle={{ color: "red" }}>
              todolist
            </NavLink>
          </div>
        </div>
      </div>
      <div className={styles.rightBox}>
        <Switch>
          <Redirect exact from="/home" to="/home/person" />
          <Route path="/home/person" component={Person} />
          <Route path="/home/goods" component={Goods} />
          <Route path="/home/shopcart" component={Shopcart} />
          <Route path="/home/todolist" component={Todolist} />
        </Switch>
      </div>
    </div>
  );
}
