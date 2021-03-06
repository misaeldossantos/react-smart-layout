import React, { useMemo } from 'react';
import { joinObjects } from "../utils";
import View from './View';
import constants from '../utils/constants'

export const Direction = {
	ROW: 'row',
	COLUMN: 'column'
}

const Base = ({
	direction,
	children,
	wrapper,
	divider,
	scrollable,
	space,
	style = [],
	...props
}) => {

	const paddingProperty = useMemo(() => {
		return direction === Direction.COLUMN ? "paddingBottom" : 'paddingRight'
	}, [direction])

	const [childrenArray, count] = useMemo(() => {
		const arr = React.Children.toArray(children).filter((c) => !!c)
		const newArr = divider ? joinObjects(arr, divider) : arr
		return [newArr, newArr.length]
	}, [children, divider])

	const Wrapper = scrollable ? constants.RNModule.ScrollView : View

	if (direction === Direction.ROW && scrollable) {
		props.horizontal = true
	}

	const styleArr = React.useMemo(() => {
		return [...style, { flexDirection: direction }]
	}, [style, direction])

	return <Wrapper style={styleArr} {...props}>
		{childrenArray.map((child, index) => {

			const isDivider = child === divider

			const elem = <View
				key={index}
				style={{
					[paddingProperty]: index !== count - 1 ? space : 0
				}}
			>
				{child}
			</View>

			if (wrapper && !isDivider) {
				return React.cloneElement(wrapper, { key: index, children: elem })
			}

			return elem
		})}
	</Wrapper>

}

export default Base