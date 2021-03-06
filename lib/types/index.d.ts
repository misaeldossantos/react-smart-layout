import React from 'react'
import { StyleProp, ScrollViewProps, View, ViewProps } from 'react-native';

type BaseProps = ViewProps & ScrollViewProps & {
    wrapper?: React.ReactElement<{}>,
    divider?: React.ReactElement<{}>,
    space?: number,
    scrollable?: boolean,
}

export const Column: React.FC<BaseProps>;

export const Row: React.FC<BaseProps & {
    alignCenter?: boolean 
}>

export const RowBetween: React.FC<{
    children: React.ReactNode,
    style?: StyleProp<View>
}>

export const KeyboardSafe: React.FC<{}>;

export const Margin: React.FC<MarginPaddingProps>;
export const Padding: React.FC<MarginPaddingProps>;
export const ThemedPadding: React.FC<MarginPaddingProps>;

type MarginPaddingProps = {
    children: React.ReactNode,
    horizontal?: number,
    vertical?: number,
    left?: number,
    right?: number,
    bottom?: number,
    top?: number,
    all?: number,
}

export const SpaceStatusBar: React.FC<ViewProps>