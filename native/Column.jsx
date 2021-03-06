import React from 'react';
import Base, { Direction } from './Base';

export default function ({ style, ...props }) {

    const styleArr = React.useMemo(() => {
        return Array.isArray(style)? style: [style]
    }, [style])

    return <Base
        {...props}
        style={styleArr}
        direction={Direction.COLUMN}
    />

}