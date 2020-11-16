import styled, { keyframes } from 'styled-components'

const directionMapper = {
    right: 'normal',
    left: 'reverse'
}

const rotateAnimation = keyframes`
    from {
        transform: rotateZ(0deg);
    }

    to {
        transform rotateZ(360deg);
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 50%;
`

export const Knob = styled.div`
    & {
        width: 80px;
        height: 80px;
        background-color: white;
        border-radius: 50%;

        animation-name: ${rotateAnimation};
        animation-duration: 2s;
        animation-iteration-count: infinite;
        animation-play-state: ${props => props.direction !== 'none' ? 'running' : 'paused'};
        animation-direction: ${props => directionMapper[props.direction]};
        animation-fill-mode: none;
        animation-timing-function: linear;

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