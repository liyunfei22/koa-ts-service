import mysql from 'mysql';
import { DB_USER, DB_HOST, DB_PASSWORD, DB_DATABASE } from '@/config';
// 创建数据池
const db = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});
// 查询
export const query = function (sql: string) {
  return new Promise((resolve, reject) => {
    db.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};

export const add = function (sql: string, params: unknown) {
  // 待执行的 SQL语句 ，英文问号 ? 代表占位符(SQL语法)
  return new Promise((resolve, reject) => {
    db.getConnection(function (err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, params, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};
export default { query, add };
