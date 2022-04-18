import Router from 'koa-router'
const router = new Router()
router.prefix('/user')
router.get('/getInfo', (ctx) => {
  ctx.body = 'this is user liyf'
})
export default router
