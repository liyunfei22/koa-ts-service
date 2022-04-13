import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { PORT } from "./config";
import AppRoutes from "./routes";
const app = new Koa();
const router = new Router();
router.get("/", (req, res) => {});
import logger from "@/log";
logger.error("eee");
//路由
AppRoutes.forEach((route) => {
  (router as any)[route.method](route.path, route.action);
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`应用启动成功 端口:${PORT}`);
