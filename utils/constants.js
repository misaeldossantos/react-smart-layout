
let RNModule = null

try {
    RNModule = require("react-native")
} catch(e) {
    RNModule = require("react-native-web")
}

export default {
    RNModule,
    statusBarHeight: RNModule.StatusBar.currentHeight,
    emptyComponent: () => null,
    emptyFn: () => {}
}
