const fs = require('fs')
const pluginName = 'HotReloadStatus'

class HotReloadStatus {
    apply(compiler) {
        compiler.hooks.done.tap(pluginName, (compilation) => {
            fs.writeFile('build/hot', "", err => {
                if (err) {
                    console.error(err)
                }
                // file written successfully
            })
        })
    }
}

module.exports = HotReloadStatus
