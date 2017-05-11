const path    = require("path");

const options = {
    sass:{
        data:"$env: " + process.env.NODE_ENV + ";",
        includePaths: [
            path.join(process.cwd(), "applications", process.env.application, "styles")
        ]
    }
}

module.exports = [
    {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
    },
    {
        test: /\.(scss)$/,
        use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader",
                options: options.sass
            }
        ]
    },
    // images
    { test: /\.jpg$/,    loader: 'url-loader?limit=65000&mimetype=image/jpg&name=img/[name].[ext]' },
    { test: /\.jpeg$/,   loader: 'url-loader?limit=65000&mimetype=image/jpeg&name=img/[name].[ext]' },
    { test: /\.png$/,    loader: 'url-loader?limit=65000&mimetype=image/png&name=img/[name].[ext]' },
    { test: /\.gif$/,    loader: 'url-loader?limit=65000&mimetype=image/gif&name=img/[name].[ext]' },
    // fonts
    { test: /\.svg$/,    loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
    { test: /\.woff$/,   loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
    { test: /\.woff2$/,  loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
    { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
    { test: /\.eot$/,    loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },
    { test: /\.html$/,    loader: 'html-loader' }
]