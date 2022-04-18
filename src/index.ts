import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { PORT } from './config'
import routers from './routers/index'
const app = new Koa()

app.use(bodyParser())
app.use(routers())
app.listen(PORT)

console.log(`应用启动成功 端口:${PORT}`)
