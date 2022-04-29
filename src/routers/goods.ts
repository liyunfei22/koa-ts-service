import Router from 'koa-router';
import { goods } from '../controller';
const router = new Router();
router.prefix('/goods');
router.get('/getInfo', goods.get);
router.post('/addCategory', goods.add);

export default router;
