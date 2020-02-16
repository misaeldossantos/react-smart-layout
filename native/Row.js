import React from 'react'
import { ScrollView, View } from "react-native";

export default function ({ children, space, alignCenter, style, scrollable, scrollProps = {} }) {

    const count = React.Children.count(children)

    const Wrapper = scrollable ? ScrollView : View

    return <Wrapper
        style={[{ flexDirection: 'row', alignItems: alignCenter? 'center': 'flex-start' }, style].flat(2)}
        {...(scrollable ? {
            horizontal: true,
            ...scrollProps
        } : {})}
    >
        {React.Children.map(children, (child, index) => {
            return <View style={{ paddingRight: index !== count ? space : 0 }}>
                {child}
            </View>
        })}
    </Wrapper>

}
