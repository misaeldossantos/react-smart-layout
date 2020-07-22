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
      <Row space={30}>
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
