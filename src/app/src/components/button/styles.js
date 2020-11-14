import styled from 'styled-components'

export const Button = styled.button`
    & {
        height: fit-content;
        width: ${props => props.width || '3.5em'};
        background-color: rgb(55,57,59);
        color: #fff;
        padding: 0.5em;
        border: none;
        border-radius: 0.1em;
        box-shadow: 0px 0px 9px -2px rgba(0,0,0,0.75);
        font-weight: bold;
    }

    &:focus {
        outline: none;
    }

    &:active {
        box-shadow: none;
    }
`