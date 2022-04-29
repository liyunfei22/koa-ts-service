import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { PORT } from './config';
import cors from '@koa/cors';
import routers from './routers/index';
import ResponseData from './middleware/ResponseData';

const app = new Koa();
app.use(ResponseData);
app.use(cors());
app.use(bodyParser());
app.use(routers());
app.listen(PORT);

console.log(`应用启动成功 地址: http://localhost:${PORT}`);
