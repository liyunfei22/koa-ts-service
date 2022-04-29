import db from '@/db';
export default class GoodsService {
  get = async (sql: string) => {
    const res = await db.query(sql);
    return res;
  };
  add = async (sql: string, values: unknown) => {
    const res = await db.add(sql, values);
    return res;
  };
}
