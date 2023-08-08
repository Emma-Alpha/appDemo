#! /usr/bin/env node

const path = require("path");
const fs = require("fs");
const { exec } = require('child_process');


process.on('uncaughtException', function(err) {
  throw err;
 });

function resolveOwn (relative) {
  return path.resolve(__dirname, '..', relative);
}

function resolveMain (relative) {
  return path.resolve(process.cwd(), '.', relative);
}

function resolveApps (relative) {
  return path.resolve(process.cwd(), '../', relative);
}

const isWindows = process.platform === 'win32';

const appsNames = fs.readdirSync(resolveApps('.'))
const args = process.argv.slice(2)
const scriptIndex = args.findIndex(i => i === 'start' || i === 'build');
const script = scriptIndex === -1 ? args[0] : args[scriptIndex];
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : [];

if(['start','build'].includes(script)) {
  const inputNames = (scriptIndex === -1 ? args[1] : args[scriptIndex+1]).split(',');
  let names = inputNames.filter(i => appsNames.includes(i));
  if(inputNames.includes('all')) {
    names = appsNames;
  }
  const exception = inputNames.filter(i => !appsNames.includes(i) && i !== 'all');
  if(exception && exception.length) {
    console.log(`不存在的App: ${exception.join(',')}`.red);
    process.exit(1);
  }

  names.forEach((app, index) => {

    function resolveApp(relative) {
      return resolveApps(path.join(app, relative));
    }
    const isDev = script === 'start';
    const isMain = app === 'main';

    const webpackServer = isDev ? 'webpack-dev-server' : 'webpack';
    const mode = isDev ? 'development' : 'production';
    let bin = `node  --trace-deprecation ${path.resolve(__dirname, '../', `node_modules/.bin/${webpackServer}`)}`;
    if (isWindows) {
      bin = `node  --trace-deprecation  ${path.resolve(__dirname, '../', `node_modules/${webpackServer}/bin/${webpackServer}.js`)}`;
    }

    let fileUrl =  process.cwd().split("apps")[0] + "apps/" + app
    
    const command = `cd ${fileUrl} && yarn && yarn ${script}_alone`;
    console.log(command)
    const child = exec(command);
    child.stdout.on('data', function(data) {
      console.log(data)
    });
    child.stderr.on('data', function(data) {
      console.log(data)
    });
    child.on('close', function(code) {
      console.log('close', code)
    });
  })

} else {
  console.log(`无法识别的指令:  ${script}`.red);
  process.exit(1);
}