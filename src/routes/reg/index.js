import React from "react";
import styles from "./index.css";
import { connect } from "dva";

function Reg(props) {
  function change() {
    props.dispatch({
      type: "example/changeTest",
      payload: "新的值",
    });
  }
  function asyncChange() {
    props.dispatch({
      type: "example/asyncChangeTest",
      payload: "异步修改后的值",
    });
  }
  return (
    <div className={styles.reg}>
      {props.test}
      <button onClick={change}>点我</button>
      <button onClick={asyncChange}>async点我</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    //key（给到Reg组件的属性名） value 属性值
    test: state.example.test,
  };
};
export default connect(mapStateToProps)(Reg);
