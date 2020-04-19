import styled from 'styled-components/native'

export default styled.View(({ horizontal, vertical, left, right, top, bottom, all }) => `
    ${horizontal !== undefined? `padding-horizontal: ${(horizontal)}px;`: ""}
    ${vertical !== undefined? `padding-vertical: ${(vertical)}px;`: ""}
    ${left !== undefined? `padding-left: ${(left)}px;`: ""}
    ${right !== undefined? `padding-right: ${(right)}px;`: ""}
    ${top !== undefined? `padding-top: ${(top)}px;`: ""}
    ${bottom !== undefined? `padding-bottom: ${(bottom)}px;`: ""}
    ${all !== undefined? `
        padding-vertical: ${(all)}px;
        padding-horizontal: ${(all)}px;
    `: ''}
`)