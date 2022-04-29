import GoodsService from '../service/goods';
import type { Context, Next } from 'koa';
const goodsService = new GoodsService();
console.log(GoodsService);
class Goods {
  async get(ctx: Context) {
    ctx.body = await goodsService.get('');
  }
  async add(ctx: Context, next: Next) {
    const sql = 'INSERT INTO `sh_goods_category` (`parent_id`, `name`, `sort`, `is_show`) VALUES (?, ?, ?, ?);';
    try {
      const body = Object.assign({ sort: 0, is_show: 1 }, ctx.request.body);
      const result = await goodsService.add(sql, [body.parent_id, body.name, body.sort, body.is_show]);
      ctx.success(result);
    } catch (err) {
      ctx.error(err);
    }
    next();
    // ctx.body = await goodsService.addCategory(sql, values);
  }
}
export default new Goods();
