import {delay} from 'dva/saga'
export default {
  namespace: "example", //命名空间--模块的名字
  //当前模块的数据
  state: {
    test: "这是example中的数据"
  },
  //订阅： 每次model初始化的时候会执行
  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      console.log("执行了");
    },
  },
  //副作用---异步逻辑， 可以和vuex中的actions联系起来 如何在页面中触发effects： dispatch({type:"example/fetch",payload:params})
  effects: {
    *fetch({ payload }, { call, put }) {
      // eslint-disable-line
      yield put({ type: "save" });
    },
    *asyncChangeTest({ payload }, { call, put}) {
      // eslint-disable-line
      //延时
      yield call(delay, 2000)
      yield put({ type: "changeTest",payload});
    },
  },
  /* 
    计算者--同步逻辑，可以和vuex中的mutation联系起来，如何在页面中触发reducers: dispatch({type: "save",payload:params})
  */
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    changeTest(state, action) {
      return { ...state, test:action.payload };
    },
  },
};
