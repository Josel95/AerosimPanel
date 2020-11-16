import styled from 'styled-components'

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

export const Label = styled.label`
    font-weight: bold;
    font-family: Arial;
    color: honeydew;
    margin-bottom: 0;
`
export const Name = styled(Label)`
    border-top: 1px solid honeydew;
    margin-top: 0.5em;
    padding: 0.5em;
`