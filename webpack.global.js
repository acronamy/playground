const webpack = require("webpack"),
      path    = require("path"),
      fs      = require("fs");

module.exports = function(env) {
  process.env = Object.assign(process.env,env);

  const targetName = env.application,
        configFile = (file)=> path.join( process.cwd(), "webpack", file )
        targetFile = (file)=> path.join( process.cwd(), "applications", targetName,file ), 
        targetOutput = path.resolve( process.cwd(), "public","applications", targetName ),
        pkgVersion = require( targetFile("package.json") ).version,
        targetLocalWebpack = fs.existsSync( targetFile("webpack.config.js") );

  
  process.env.version = pkgVersion;
  
  const defaults = {
    entry: {
      [targetName]:targetFile("index.ts"),
    },
    output:{
      path: targetOutput,
      filename: `${targetName?targetName:"index"}.${pkgVersion}.js`,
    },
    resolve: {
      extensions: require( configFile("extensions.config.js") ),
      alias: require( configFile("alias.config.js") )
    },
    devtool: 'source-map',
    module: {
      rules: require( configFile("rules.config.js") ),
    },
    plugins: require( configFile("plugins.config.js") ),
    devServer: require( configFile("devserver.config.js") )
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
    if(process.env.server){
      devServer();
    }

    return Object.assign(defaults, require( targetFile("webpack.config.js") ));
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