
## react-smart-layout 
[![npm-badge]][npm-url] ![downloads-badge]

[npm-badge]: https://img.shields.io/npm/v/react-smart-layout
[npm-url]: https://www.npmjs.com/package/react-smart-layout
[downloads-badge]: https://img.shields.io/npm/dt/react-smart-layout?color=orange

Simple flexbox abstraction for react-native and react for web.

- create columns and rows (flex-direction) and put space (defined by you) between children
- components for padding and margin (put edge value as props)
- component for space-between (justify-content)
- other useful components, react-native only

Supports ReactJS through react-native-web

## Install

- npm: `npm install react-smart-layout --save`
- yarn: `yarn add react-smart-layout`

### Example

[![Edit react-smart-layout-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-smart-layout-example-xx376?fontsize=14&hidenavigation=1&theme=dark)

# Components

### Column

Create element with direction column and put space between elements

```tsx
import React from 'react'
import {Text} from 'react-native'
import {Column, Padding} from 'react-smart-layout'
import {Divider} from 'react-native-elements'

function MyComponent() {
    return <Column
       space={10} // space in px
       style={{ backgroundColor: 'gray' }} // custom style
       divider={<Divider/>} // put divider/other component between elements
       wrapper={<Padding left={10}/>} // optional wrapper each element
    >
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
    </Column>
}

type ColumnProps = ViewProps & ScrollViewProps & {
    wrapper?: React.ReactElement<{}>,
    divider?: React.ReactElement<{}>,
    space?: number,
    scrollable?: boolean,
}

```

### Row

Create element with direction row and put space between elements

```tsx
import React from 'react'
import {Text} from 'react-native'
import {Row} from 'react-smart-layout'

function MyComponent() {
    return <Row
       space={10} // space in px
       alignCenter // put align-items: center in style
       style={{ backgroundColor: 'gray' }} // custom style
       scrollable // wrap as ScrollView
    >
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
    </Row>
}

type RowProps = ViewProps & ScrollViewProps & {
    wrapper?: React.ReactElement<{}>,
    divider?: React.ReactElement<{}>,
    space?: number,
    scrollable?: boolean,
    alignCenter?: boolean
}

```

### Padding

```tsx
import React from 'react'
import {Text} from 'react-native'
import {Padding} from 'react-smart-layout'

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

type PaddingProps = {
    children: React.ReactNode,
    horizontal?: number,
    vertical?: number,
    left?: number,
    right?: number,
    bottom?: number,
    top?: number,
    all?: number,
}
```

### Margin

Wrap components with margin, has the same props of padding

### RowBetween

Create a component with style: 
```js 
{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
}
```


```tsx
import React from 'react'
import {Text, View} from 'react-native'
import {RowBetween} from 'react-smart-layout'

function MyComponent() {
    return <View>
        <RowBetween>
            <Text>Text 1</Text>
            <Text>Text 2</Text>
        </RowBetween>
    </View>
}

type RowBetweenProps = ViewProps

```

# React-native only:

### SpaceStatusBar

Space of status bar (android and ios)

```tsx
import React from 'react'
import {Text, View} from 'react-native'
import {SpaceStatusBar} from 'react-smart-layout'
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

type SpaceStatusBarProps = ViewProps

```
### KeyboardSafe

Wrap elements with KeyboardAvoidingView

```tsx
import React from 'react'
import {ScrollView, View, TextInput} from 'react-native'
import {KeyboardSafe} from 'react-smart-layout'

function MyComponent() {
    return <ScrollView>
        <KeyboardSafe>
            <TextInput/>
        </KeyboardSafe>
    </ScrollView>
}

```

# Usage

### ReactJS

```jsx
import React from 'react';
import { Column, Padding, Row, RowBetween } from 'react-smart-layout'

function App() {
  return (
    <Column space={10}>
      <Column space={30}>
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </Column>
      <Row space={30} alignCenter>
        <span>First column</span>
        <span>Second column</span>
        <span>Third column</span>
      </Row>
      <RowBetween>
        <span>Left</span>
        <span>Right</span>
      </RowBetween>
    </Column>
  );
}

export default App;
```

![image](https://user-images.githubusercontent.com/47726159/110220413-5920f300-7ea4-11eb-96c0-5da59a7fc89d.png)
