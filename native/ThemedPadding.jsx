import React from 'react'
import styled from 'styled-components/native'
import Padding from "./Padding";

export default styled(Padding).attrs(props => ({
    horizontal: 20,
    vertical: 15,
    ...props
}))``