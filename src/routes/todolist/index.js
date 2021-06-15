import React, { useEffect, useRef, useMemo } from "react";
import styles from "./index.css";
import { connect } from "dva";

function Todolist({ dispatch, list, curBtn }) {
  const inputRef = useRef(null);
  useEffect(() => {
    dispatch({
      type: "todolist/getList",
    });
  }, []);
  const showList = useMemo(() => {
    switch (curBtn) {
      case "all":
        return list;
      case "done":
        return list.filter((item) => item.status === "done");
      case "undone":
        return list.filter((item) => item.status === "undone");
      default:
        return list;
    }
  }, [list, curBtn]);
  function addTask() {
    //获取用户输入值
    dispatch({
      type: "todolist/addTask",
      payload: inputRef.current.value, //获取用户输入值
    });
    inputRef.current.value = "";
  }
  function changeStatus(e) {
    const _id = e.target.dataset.id;
    const status = e.target.dataset.status;
    dispatch({
      type: "todolist/changeStatus",
      payload: {
        _id,
        status,
      },
    });
    //获取用户输入值
    dispatch({
      type: "todolist/addTask",
      payload: inputRef.current.value, //获取用户输入值
    });
    inputRef.current.value = "";
  }
  function toggle(e) {
    const curBtn = e.target.dataset.btn;
    dispatch({
      type: "todolist/setBtn",
      payload: curBtn,
    });
  }
  return (
    <div>
      <div>
        <input ref={inputRef} placeholder="请输入任务" />
        <button onClick={addTask}>添加任务</button>
        <ul onClick={changeStatus}>
          {showList.map((item) => {
            return (
              <li
                data-id={item._id}
                data-status={item.status}
                key={item._id}
                className={item.status === "done" ? styles.done : styles.undone}
              >
                {item.task}
              </li>
            );
          })}
        </ul>
      </div>
      <div onClick={toggle}>
        <button
          data-btn="all"
          className={curBtn === "all" ? styles.active : ""}
        >
          全部已完成
        </button>
        <button
          data-btn="done"
          className={curBtn === "done" ? styles.active : ""}
        >
          已完成
        </button>
        <button
          data-btn="undone"
          className={curBtn === "undone" ? styles.active : ""}
        >
          未完成
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.todolist.list,
    curBtn: state.todolist.curBtn,
  };
};
export default connect(mapStateToProps)(Todolist);
