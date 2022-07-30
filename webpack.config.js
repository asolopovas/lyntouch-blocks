const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const HotPlugin = require('./src/hot-plugin')

module.exports = {
    ...defaultConfig,
    plugins: [
        ...defaultConfig.plugins,
        new HotPlugin(),
    ]
}
