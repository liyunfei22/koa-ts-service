import GoodsService from '../service/goods';
import type { Context, Next } from 'koa';
const goodsService = new GoodsService();
console.log(GoodsService);
interface CategoryItems {
  parent_id: number;
  name: string;
  sort: number;
  is_show: number;
}
class Goods {
  async get(ctx: Context) {
    try {
      const page = Number(ctx.query.page) || 1;
      const pageSize = Number(ctx.query.pageSize) || 10;
      const count = pageSize;
      const offset = (page - 1) * pageSize;
      const [res, total] = await Promise.all([
        goodsService.getCategoryByPage(offset, count),
        goodsService.getCategoryCounts(),
      ]);
      ctx.success({
        rows: res,
        total: total[0].total,
      });
    } catch (err) {
      ctx.error(err);
    }
  }
  async getAll(ctx: Context) {
    try {
      const res = await goodsService.getAllCategory();
      ctx.success(res);
    } catch (err) {
      ctx.error(err);
    }
  }
  async add(ctx: Context, next: Next) {
    try {
      const body: CategoryItems = Object.assign({ sort: 0, is_show: 1 }, ctx.request.body);
      const result = await goodsService.addCategory(body);
      ctx.success(result);
    } catch (err) {
      ctx.error(err);
    }
    next();
    // ctx.body = await goodsService.addCategory(sql, values);
  }
  async delete(ctx: Context, next: Next) {
    try {
      const id = ctx.query.id;
      if (id && typeof id === 'string') {
        const res = await goodsService.deleteCategory(id);
        console.log(res);
        if (res.affectedRows) {
          ctx.success();
        } else {
          ctx.notFound('删除失败');
        }
      } else {
        throw new Error('id不能为空');
      }
    } catch (err) {
      ctx.error(err);
    }
    next();
    // ctx.body = await goodsService.addCategory(sql, values);
  }
}
export default new Goods();
