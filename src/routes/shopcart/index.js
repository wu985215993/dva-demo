import React, { useEffect } from "react";
import { connect } from "dva";

function Shopcart({ list, dispatch }) {
  useEffect(() => {
    // getData();
    dispatch({
      type: "shopcart/getData",
    });
  }, []);
  //   async function getData() {
  //     /* fetch("http://jacklv.cn/shopcart/getShopcartData")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         if (res.code === 1) {
  //           dispatch({
  //             type: "shopcart/serList",
  //             payload: res.data,
  //           });
  //         }
  //       }); */
  //     const data = await getShopcartDataApi();
  //     dispatch({
  //       type: "shopcart/setList",
  //       payload: data,
  //     });
  //   }
  async function changeNum(_id, n) {
    /* fetch("http://jacklv.cn/shopcart/changeNum", {
      method: "POST",
      body: JSON.stringify({ _id, n }),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getData();
    }); */
    // await changeNumApi({ _id, n });
    // getData();
    dispatch({
      type: "shopcart/changeNum",
      payload: {
        _id,
        n,
      },
    });
  }
  async function del(_id) {
    /* fetch("http://jacklv.cn/shopcart/delete?_id=" + _id, {
      method: "delete",
    }).then(() => {
      getData();
    }); */
    // await delApi(_id);
    // getData();
    dispatch({
        type: "shopcart/del",
        payload: _id
      });
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>商品名</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button onClick={() => changeNum(item._id, -1)}>-</button>
                  {item.num}
                  <button onClick={() => changeNum(item._id, 1)}>+</button>
                </td>
                <td>{item.num * item.price}</td>
                <td>
                  <button onClick={() => del(item._id)}>删除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    list: state.shopcart.list,
  };
};
export default connect(mapStateToProps)(Shopcart);
