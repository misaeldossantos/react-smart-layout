
## react-smart-layout

Using flexbox to create simple and useful components (React Native).

What this library allows you to create:

- columns and rows (with Flex Direction) and put space between the rows and columns
- wrap components with padding and margin in the best way, without having to put them in style (like Flutter).

Right now we only support React Native, but soon we will support ReactJS.

## Current version

`react-smart-layout@0.0.3`

## Install

`npm install react-smart-layout --save`
or
`yarn add react-smart-layout`


## Padding

Wrap components with padding

```jsx
import React from 'react'
import {Text} from 'react-native'
import {Padding} from 'react-smart-layout/native'

function MyComponent() {
    return <Padding
        top={10}
        right={20}
        horizontal={15}
        vertical={5}
    >
        <Text>Testing padding component</Text>
    </Padding>
}


```

| Prop  | Default  | Type | Description | Required |
| :------------ |:---------------:| :---------------:| :-----| :-----|
| top | 0 | `number` | padding-top  | No
| bottom | 0 | `number` | padding-bottom  | No
| left | 0 | `number` | padding-left  | No
| right | 0 | `number` | padding-right  | No
| all | 0 | `number` | put padding in all edges  | No
| vertical | 0 | `number` | padding-vertical (React Native) and padding-top/padding-bottom in ReactJS| No
| horizontal | 0 | `number` | padding-horizontal (React Native) and padding-left/padding-right in ReactJS| No

## Margin

Wrap components with margin, it has the same behavior of Padding

## Row

Create element with style 'flex-direction: row' and put space between elements

```jsx
import React from 'react'
import {Text} from 'react-native'
import {Row} from 'react-smart-layout/native'

function MyComponent() {
    return <Row
       space={10} // space betweeen each element
       alignCenter // put align-items: center in style
       style={{ backgroundColor: 'gray' }} // custom style
       scrollable // wrap as ScrollView
    >
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
    </Row>
}


```

| Prop  | Default  | Type | Description | Required |
| :------------ |:---------------:| :---------------:| :-----| :-----|
| space | 0 | `number` | space between rows  | No
| alignCenter | false | `boolean` | put align-items: center  | No
| style | {} | `object` | custom styles  | No
| scrollable | false | `boolean` | wrap with ScrollView (horizontal)  | No

## Column

Create element with style 'flex-direction: column' and put space between elements

```jsx
import React from 'react'
import {Text} from 'react-native'
import {Column, Padding} from 'react-smart-layout/native'
import {Divider} from 'react-native-elements'

function MyComponent() {
    return <Column
       space={10} // space betweeen each element
       style={{ backgroundColor: 'gray' }} // custom style
       divider={<Divider/>} // put divider/other component between each element
       wrapper={<Padding left={10}/>} // optional wrapper each element
    >
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
    </Column>
}


```

| Prop  | Default  | Type | Description | Required |
| :------------ |:---------------:| :---------------:| :-----| :-----|
| space | 0 | `number` | space between rows  | No
| style | {} | `object` | custom styles  | No
| divider | null | `react element` | put divider between elements | No
| wrapper | null | `react element` | put wrapper between elements | No

# Other useful components:

## SpaceStatusBar

Put space of status bar

```jsx
import React from 'react'
import {Text, View} from 'react-native'
import {SpaceStatusBar} from 'react-smart-layout/native'
import styled from 'styled-components'

function MyComponent() {
    return <View>
        <Header>
            <SpaceStatusBar />
            <Text>Header</Text>
        </Header>
        
        <Content>
            <Text>Content</Text>
        </Content>
    </View>
}

const Header = styled.View``
const Content = styled.ScrollView``


```

`has no properties`

## RowBetween

Create a component with style, : 
{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}


```jsx
import React from 'react'
import {Text, View} from 'react-native'
import {RowBetween} from 'react-smart-layout/native'

function MyComponent() {
    return <View>
        <RowBetween>
            <Text>Text 1</Text>
            <Text>Text 2</Text>
        </RowBetween>
    </View>
}

```

`has no properties`

## KeyboardSafe

Wrap elements with KeyboardAvoidingView

```jsx
import React from 'react'
import {ScrollView, View, TextInput} from 'react-native'
import {KeyboardSafe} from 'react-smart-layout/native'

function MyComponent() {
    return <ScrollView>
        <KeyboardSafe>
            <TextInput/>
        </KeyboardSafe>
    </ScrollView>
}

```

`has no properties`
