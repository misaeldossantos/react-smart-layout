import React from 'react';
import { Column, Row, RowBetween } from 'react-smart-layout'

function App() {
  return (
    <Column
      space={20}
      divider={<div style={{ borderBottom: '1px solid red' }} />}
    >
      <Column
        space={20}
        wrapper={wrapper}
      >
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </Column>
      <Row
        space={30}
        divider={<div style={{ height: '100%', borderRight: '1px solid red' }} />}
      >
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

const wrapper = <div style={{ backgroundColor: '#407bdb', border: '1px solid white', color: 'white' }} />

export default App;
