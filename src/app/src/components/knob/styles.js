import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 50%;
`

export const Knob = styled.div.attrs(props => ({
    style: {
        transform: `rotateZ(${props.degrees}deg)`
    }
}))`
    & {
        width: 80px;
        height: 80px;
        background-color: white;
        border-radius: 50%;

        position: relative;
    }

    &:after {
        content: '';
        background-color: red;
        width: 10px;
        height: 40px;
        position: absolute;
        left: calc(50% - 5px);
    }
` 