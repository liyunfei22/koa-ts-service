/* eslint-disable @typescript-eslint/no-var-requires */
import compose from 'koa-compose';
import * as Koa from 'koa';

import glob from 'glob';
import { resolve } from 'path';

const registerRouter = () => {
  const routers: Array<Koa.Middleware> = [];
  const files = glob.sync(resolve(__dirname, './**/*.ts')).filter((value) => value.indexOf('index.ts') === -1);
  console.log(files);
  files.forEach((router) => {
    console.log(router);
    routers.push(require(router).default.routes());
    routers.push(require(router).default.allowedMethods());
  });
  return compose(routers);
};

export default registerRouter;
