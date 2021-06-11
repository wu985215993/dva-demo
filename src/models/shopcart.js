import { getShopcartDataApi, changeNumApi, delApi } from "../services/shopcart";
export default {
  namespace: "shopcart",
  state: {
    list: [],
  },
  subscriptions: {
    init({ dispatch, history }) {
      console.log("init执行了");
    },
  },
  effects: {
    *getData({ payload }, { call, put }) {
      const data = yield call(getShopcartDataApi);
      yield put({
        type: "setList",
        payload: data,
      });
    },
    *changeNum({ payload }, { call, put }) {
      yield call(changeNumApi, payload);
      const data = yield call(getShopcartDataApi);
      yield put({
        type: "setList",
        payload: data,
      });
    },
    *del({ payload }, { call, put }) {
      yield call(delApi, payload);
      const data = yield call(getShopcartDataApi);
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
  },
};
