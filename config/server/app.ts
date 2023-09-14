import Koa from 'koa';
import webpack from 'webpack';
import { createReadStream, existsSync } from 'fs';
import { extname, join } from 'path';
const config = require('../webpack/webpack.development.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const koaStatic = require('koa-static');
const cors = require('@koa/cors');
const compress = require('koa-compress');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 处理koa 跨域请求的问题(@koa-cors)
app.use(
  cors({
    origin: function () {
      return '*';
    },
    allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  }),
);

// 压缩 (koa-compress)
app.use(compress());

app.use((ctx, next) => {
  console.log('[dev] original file ===>', ctx);
  next();
});

const compiler = webpack(config);

// 添加中间件
const compilerMiddleware = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath || '/',
  writeToDisk: true,
  stats: 'none',
});

app.use(compilerMiddleware);

// TODO hmr hooks

app.use(
  require('connect-history-api-fallback')({
    index: '/',
  }),
);

app.listen(3000);

router.get('/', (_req, res, next) => {
  res.set('Content-Type', 'text/html');
  const htmlPath = join('/Users/liangpingbo/Desktop/4399/frontend/subApplicate_demo', 'index.html');
  console.log(htmlPath);
  if (existsSync(htmlPath)) {
    createReadStream(htmlPath).on('error', next).pipe(res);
  } else {
    next();
  }
});

// 使用koa-static中间件，指向webpack配置中设置的publicPath
app.use(koaStatic(__dirname + config.output.publicPath));
