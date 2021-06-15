import request from "../utils/request";
//获取todolist列表
export const getListApi = () => request("/todolist/getTasks");
//添加任务
export const addTaskApi = (task) =>
  request("/todolist/addTask", {
    method: "POST",
    body: { task },
  });
//修改状态
export const changeStatusApi = (body) =>
  request("/todolist/changeTaskStatus", {
    method: "POST",
    body
  });
