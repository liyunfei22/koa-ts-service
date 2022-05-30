import type { Context, Next } from 'koa';

export default async (ctx: Context, next: Next) => {
  ctx.error = (message = '', errMsg = '', data = {}, code = 500) => {
    ctx.body = { code, message, errMsg: '服务器出错,错误信息：' + errMsg, data };
  };
  ctx.notFound = (data = {}, message = '') => {
    ctx.body = { code: 1, message, data };
  };
  ctx.success = (data = {}, message = 'ok') => {
    ctx.body = { code: 0, message, data };
  };
  await next();
};
