const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const HotPlugin = require('./src/hot-plugin')

let config = {
    ...defaultConfig,
}

config.devServer.historyApiFallback = true
config.devServer.allowedHosts = "all"

config.devServer.http2 = true
config.devServer.https =  {
  key: fs.readFileSync('ssl/localhost.key'),
  cert: fs.readFileSync('ssl/localhost.key')
},

module.exports = config
