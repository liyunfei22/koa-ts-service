import { query } from '@/db';
interface CategoryItems {
  parent_id: number;
  name: string;
  sort: number;
  is_show: number;
}
export default class GoodsService {
  categoryTable: string;
  constructor() {
    this.categoryTable = 'sh_goods_category';
  }
  async getAllCategory() {
    const sql = `SELECT id, name, parent_id, is_show, sort FROM \`${this.categoryTable}\`;`;
    const res = await query(sql);
    return res;
  }
  async addCategory(data: CategoryItems) {
    const sql = 'INSERT INTO `sh_goods_category` (`parent_id`, `name`, `sort`, `is_show`) VALUES (?, ?, ?, ?);';
    const values = [data.parent_id, data.name, data.sort, data.is_show];
    const res = await query(sql, values);
    return res;
  }
  async getCategory(id: number) {
    const sql = `SELECT id, name, parent_id, is_show, sort FROM\`${this.categoryTable}\` WHERE id = ?;`;
    const res = await query(sql, [id]);
    return res[0];
  }
  async getCategoryByPage(offset: number, count: number) {
    // limit 子句 offert, count
    const sql = `SELECT id, name, parent_id, is_show, sort FROM\`${this.categoryTable}\` LIMIT ?, ?;`;
    const res = await query(sql, [offset, count]);
    return res;
  }
  async getCategoryCounts() {
    const sql = `SELECT COUNT(id) as total FROM\`${this.categoryTable}\`;`;
    const res = await query(sql);
    return res;
  }
  async deleteCategory(id: string) {
    const sql = `DELETE FROM \`${this.categoryTable}\` WHERE id = ?;`;
    const res = await query(sql, [id]);
    return res;
  }
}
