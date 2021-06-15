import { getListApi, addTaskApi, changeStatusApi } from "../services/todolist";
export default {
  namespace: "todolist",
  state: {
    list: [],
    curBtn: "all", //all done undone
  },
  subscriptions: {},
  effects: {
    *getList({ payload }, { call, put }) {
      const data = yield call(getListApi);
      yield put({
        type: "setList",
        payload: data,
      });
    },
    *addTask({ payload }, { call, put }) {
      yield call(addTaskApi, payload);
      const data = yield call(getListApi);
      yield put({
        type: "setList",
        payload: data,
      });
    },
    *changeStatus({ payload }, { call, put }) {
      yield call(changeStatusApi, payload);
      const data = yield call(getListApi);
      yield put({
        type: "setList",
        payload: data,
      });
    },
  },
  reducers: {
    setList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    setBtn(state, action) {
      return {
        ...state,
        curBtn: action.payload,
      };
    },
  },
};
