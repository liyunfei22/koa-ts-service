import Router from 'koa-router';
import { goods } from '../controller';
const router = new Router();
router.prefix('/goods');
router.get('/getCategory', goods.get);
router.get('/getAllCategory', goods.getAll);
router.post('/addCategory', goods.add);
router.get('/deleteCategory', goods.delete);

export default router;
