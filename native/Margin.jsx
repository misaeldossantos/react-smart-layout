import styled from 'styled-components/native'

export default styled.View(({ horizontal, vertical, left, right, top, bottom, all }) => `
    ${horizontal? `margin-horizontal: ${(horizontal)}px;`: ""}
    ${vertical? `margin-vertical: ${(vertical)}px;`: ""}
    ${left? `margin-left: ${(left)}px;`: ""}
    ${right? `margin-right: ${(right)}px;`: ""}
    ${top? `margin-top: ${(top)}px;`: ""}
    ${bottom? `margin-bottom: ${(bottom)}px;`: ""}
    ${all? `
        margin-vertical: ${(all)}px;
        margin-horizontal: ${(all)}px;
    `: ''}
`)