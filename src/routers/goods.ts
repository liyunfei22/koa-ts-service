import Router from 'koa-router';
import { goods } from '../controller';
const router = new Router();
router.prefix('/goods');
router.get('/getInfo', goods.get);
export default router;
