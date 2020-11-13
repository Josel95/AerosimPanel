import styled from 'styled-components'

const INPUT_SIZE = 2

const INPUT_HEIGHT_FACTOR = 1.2

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Label = styled.label`
    font-weight: bold;
    font-family: Arial;
    color: honeydew;
`

export const Name = styled(Label)`
    border-top: 1px solid honeydew;
    margin-top: 0.5em;
    padding: 0.5em;
`

export const Input = styled.input`
    & {
        appearance: none;
        width: ${INPUT_SIZE}em;
        height: ${INPUT_SIZE * 2 * INPUT_HEIGHT_FACTOR}em;
        background: #fff;
        border-radius: ${INPUT_SIZE}em;
        position: relative;
        outline-style: none;
        cursor: pointer;
        box-shadow: inset 0px 0px 38px -9px rgba(0, 0, 0, 1);
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);    
    }

    &:after {
        content: "";
        position: absolute;
        width: ${INPUT_SIZE}em;
        height: ${INPUT_SIZE}em;
        border-radius: 50%;
        background: rgb(187, 187, 187);
        transition: top .3s ease;
        top: calc(100% - ${INPUT_SIZE}em);
        left: calc(50% - ${INPUT_SIZE / 2}em);
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(88, 88, 88, 1) 100%);
    }

    &:checked:after {
        top: 0;
        left: calc(50% - ${INPUT_SIZE / 2}em);
    }
`