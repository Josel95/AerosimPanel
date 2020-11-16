import styled from 'styled-components'

export const Container = styled.div`
    background-color: #8f8f99;
    min-height: 100vh;
    font-size: 16px;
    padding: 2em;
    display: flex;
    flex-direction: column;
`

export const Panel = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.padding || '5em'};
    width: fit-content;
    height: ${props => props.height || 'fit-content'};
    border-radius: 2em;
    box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.75);
`