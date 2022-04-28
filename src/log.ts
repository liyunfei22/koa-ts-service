import { configure, getLogger } from 'log4js';

configure({
  appenders: {
    app: { type: 'dateFile', filename: './logs/app.log' },
    out: { type: 'stdout' },
  },
  categories: {
    default: { appenders: ['app', 'out'], level: 'debug' },
  },
});
// 指定类别
const logger = getLogger();
// 设置级别 default level is OFF
// logger.level = "debug";

// logger.debug('time', new Date());
// logger.info("time", new Date());
// logger.warn("time", new Date());
// logger.error('time', new Date());
// logger.fatal("time", new Date());
// logger.mark("time", new Date());

// logger.warn("time", new Date());
export default logger;
