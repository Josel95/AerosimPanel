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

export const Row = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-between'};
    margin-top: ${props => props.marginTop || ''};
    margin-bottom: ${props => props.marginBottom || ''};
`

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent || 'space-between'};
    align-items: ${props => props.alignItems || ''};
    margin-left: ${props => props.marginLeft || ''};
    margin-right: ${props => props.marginRight || ''};
`