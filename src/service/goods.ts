import query from '@/db';
export default class GoodsService {
  get = async () => {
    const res = await query('SELECT *  FROM test');
    console.log(res);
    return res;
  };
}
