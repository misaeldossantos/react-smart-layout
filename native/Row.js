import React from 'react'
import { ScrollView, View } from "react-native";
import { flattenDepth } from 'lodash'

export default function ({ children, space, alignCenter, style, scrollable, scrollProps = {} }) {

    const count = React.Children.count(children)

    const Wrapper = scrollable ? ScrollView : View

    return <Wrapper
        style={flattenDepth([{ flexDirection: 'row', alignItems: alignCenter? 'center': 'flex-start' }, style], 2)}
        {...(scrollable ? {
            horizontal: true,
            ...scrollProps
        } : {})}
    >
        {React.Children.map(children, (child, index) => {
            return <View key={index} style={{ paddingRight: index !== count ? space : 0 }}>
                {child}
            </View>
        })}
    </Wrapper>

}
