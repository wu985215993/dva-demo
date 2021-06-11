import dva from "dva";
import "./index.css";

// 1. Initialize 创建应用
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model 可以把这一步和react中利用Provider注入数据的过程联系起来
app.model(require("./models/example").default);
// app.model(require('./models/shopcart').default);

// 4. Router 注册视图
app.router(require("./router").default);

// 5. Start 启动应用
app.start("#root");
export default app;
