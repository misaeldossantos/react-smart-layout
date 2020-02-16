import {StatusBar} from "react-native";

export default {
    statusBarHeight: StatusBar.currentHeight,
    emptyComponent: () => null,
    emptyFn: () => {},
    android: {
        package: __DEV__? "host.exp.exponent": "br.com.inmeta.app"
    }
}