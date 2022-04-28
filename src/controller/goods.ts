import GoodsService from '../service/goods';
import type { Context } from 'koa';
class Goods {
  private service: GoodsService = new GoodsService();

  async get(ctx: Context) {
    ctx.body = await this.service.get();
  }
  add(ctx: Context) {
    ctx.body = 'add';
  }
}
export default new Goods();
