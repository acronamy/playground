import * as webpack from "webpack";
import {Configuration} from "webpack";
import * as path from "path";
import * as fs from "fs";

import {aliasConfig} from "./webpack/alias.config";
import {extensionsConfig} from "./webpack/extensions.config";
import {pluginsConfig} from "./webpack/plugins.config";
import {rulesConfig} from "./webpack/rules.config";

module.exports = function(env) {
  process.env = Object.assign(process.env, env);

  const targetName = env.application;
  const configFile = (file)=> path.join( process.cwd(), "webpack", file );
  const targetFile = (file)=> path.join( process.cwd(), "applications", targetName, file ); 
  const targetOutput = path.resolve( process.cwd(), "public","applications", targetName );
  const pkgVersion = require( targetFile("package.json") ).version;
  const targetLocalWebpack = fs.existsSync( targetFile("webpack.config.ts") );

  process.env.version = pkgVersion;
  
  /*
  * Webpack entry filename.
  */
  const entry = {
    [targetName]:targetFile("index.ts")
  }
  /*
  * Webpack resolve behavior.
   */
  const resolve = {
    extensions: extensionsConfig,
    alias: aliasConfig(targetFile)
  }
  /*
  * Webpack output behavior.
  */
  console.log(targetOutput,`${targetName?targetName:"index"}.${pkgVersion}.js`)
  const output = {
    path: targetOutput,
    filename: `${targetName?targetName:"index"}.${pkgVersion}.js`,
  }
  /*
  * Webpack devtool behavior.
  */
  const devtool = 'source-map'
  /*
  * My Webpack module behavior.
  */
  const module = {
    rules: rulesConfig
  }
  /*
  * My included Webpack plugins.
  */
  const plugins = pluginsConfig;

  /*
  * What is included in my webpack global config?
  */
  const defaults:Configuration = {
    entry:entry,
    output:output,
    resolve:resolve,
    devtool:devtool,
    module:module,
    plugins:plugins
  }

  /**
   * Overide webpack if application uses its own config
  */
  if(targetLocalWebpack){
    console.log(`
Env: ${process.env.NODE_ENV}
App: ${process.env.application}
Server: ${process.env.server? true : false}
`
)
    if(env.server){
      devServer();
    }
    return Object.assign(defaults, require( targetFile("webpack.config.ts") ));
  }
  else{
    return defaults;
  }
}

function devServer(){
  // On Windows Only ...
  const spawn = require('child_process').spawn;
  const server = spawn('cmd.exe', ['/c', `npm run server:start -- --env=${process.env}` ]);

  server.stdout.on('data', (data) => {
    console.log(`[server:${Date.now()}]
`,data.toString());
  });

  server.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  server.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
  });
}