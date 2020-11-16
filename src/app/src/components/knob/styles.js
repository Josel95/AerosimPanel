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
    background-color: #cacaca;
    box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.82);
    border-radius: 50%;
`

export const Knob = styled.div`
    & {
        width: 70px;
        height: 70px;
        background-color: rgb(55,57,59);
        box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.83);
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

    &:active {
        box-shadow: none;
    }

    &:after {
        content: '';
        background-color: white;
        box-shadow: inset 0px 0px 11px 1px rgba(0,0,0,0.83);
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        top: 5px;
        left: calc(50% - 7.5px);
    }
` 