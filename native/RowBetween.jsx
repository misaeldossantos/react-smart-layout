import React from 'react'
import styled from 'styled-components/native'
import View from './View'

export default styled(View)(props => `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`)