const path = require('path')

function getPreloadPath() {
    return path.join(__dirname, './preload.js')
}

module.exports = {
    getPreloadPath
}