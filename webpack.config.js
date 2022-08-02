const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const HotPlugin = require('./src/hot-plugin')

let config = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        new HotPlugin(),
    ],
}

config.devServer.historyApiFallback = true
config.devServer.allowedHosts = "all"

module.exports = config
