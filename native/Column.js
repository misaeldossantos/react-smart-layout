import React, { Children, useMemo } from 'react'
import { joinObjects } from "../utils";
import View from './View';

export default function ({ children, wrapper, divider, style, space }) {

    const count = React.Children.count(children)

    const childrenArray = useMemo(() => {
        const arr = React.Children.toArray(children).filter((c) => !!c)
        return divider ? joinObjects(arr, divider) : arr
    }, [children, divider])

    return <View style={style}>
        {childrenArray.map((child, index) => {

            const isLast = index < count - 1

            const elem = <View
                key={index}
                style={{ paddingBottom: isLast ? space : 0 }}
            >
                {child}
            </View>

            if (wrapper && child !== divider) {
                return React.cloneElement(wrapper, {key: index}, elem)
            }

            return elem
        })}
    </View>

}