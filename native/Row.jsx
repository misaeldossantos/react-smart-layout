import React from 'react'
import Base, { Direction } from './Base'

export default function ({ alignCenter, style, ...props }) {

    const styleArr = React.useMemo(() => {
        const result = []
        if(alignCenter) {
            result.push({
                alignItems: 'center'
            })
        }
        if(Array.isArray(style)) {
            result.push(...style)
        } else {
            result.push(style)
        }
        
        return result
    }, [alignCenter, style])

    return <Base
        {...props}
        style={styleArr}
        direction={Direction.ROW}
    />

}
