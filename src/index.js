import dva from 'dva';
import './index.css';

// 1. Initialize 创建应用
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router 注册视图
app.router(require('./router').default);

// 5. Start 启动应用
app.start('#root');
