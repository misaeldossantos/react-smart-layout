import React from 'react'
import { StyleProp, ScrollViewProps, View, ViewProps } from 'react-native';

export const Column: (props: ColumnProps) => React.ReactElement;

type ColumnProps = {
    children: React.ReactNode,
    wrapper?: React.ReactElement<{}>,
    divider?: React.ReactElement<{}>,
    style?: StyleProp<View>,
    space?: number
} 

export const Row: (props: RowProps) => React.ReactElement;

type RowProps = {
    children: React.ReactNode,
    style?: StyleProp<View>,
    space?: number,
    scrollable?: boolean,
    scrollProps?: ScrollViewProps,
    alignCenter?: boolean 
} 

export const RowBetween: (props: RowBetweenProps) => React.ReactElement;

type RowBetweenProps = {
    children: React.ReactNode,
    style?: StyleProp<View>,
} 

export const KeyboardSafe: (props: KeyboardSafeProps) => React.ReactElement;

type KeyboardSafeProps = {
    children: React.ReactNode,
} 

export const Margin: (props: MarginPaddingProps) => React.ReactElement;
export const Padding: (props: MarginPaddingProps) => React.ReactElement;
export const ThemedPadding: (props: MarginPaddingProps) => React.ReactElement;

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

export const SpaceStatusBar: (props: ViewProps) => React.ReactElement