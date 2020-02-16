import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Padding, Column, Row, SpaceStatusBar } from 'react-smart-layout/native'

export default function App() {
  return (
    <>
      <SpaceStatusBar />
      <Padding
        vertical={20}
        horizontal={15}
      >
        <Column
          space={10}
          divider={<Text>Layout example</Text>}
        >
          <Column space={10} wrapper={<View style={{ backgroundColor: 'blue' }} />}>
            <Text>Text Column 1</Text>
            <Text>Text Column 2</Text>
            <Text>Text column 3</Text>
          </Column>

          <Row space={10}>
            <Text>Text Row 1</Text>
            <Text>Text Row 2</Text>
            <Text>Text Row 3</Text>
          </Row>

          <Row space={10}>
            <Text>Text Row 1</Text>
            <Text>Text Row 2</Text>
            <Text>Text Row 3</Text>
          </Row>
        </Column>
      </Padding>
    </>
  );
}

