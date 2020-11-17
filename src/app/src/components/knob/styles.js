import styled, { keyframes } from 'styled-components'

import texture from './texture.png'

const directionMapper = {
    right: 'normal',
    left: 'reverse',
    up: 'reverse',
    down: 'normal'
}

const rotateHorizontalAnimation = keyframes`
    from {
        transform: rotateZ(0deg);
    }

    to {
        transform rotateZ(360deg);
    }
`

const rotateVerticalAnimation = keyframes`
    from {
        background-position-y: 0%
    }

    to {
        background-position-y: 100%
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HorizontalContainer = styled(Container)`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: inset 0px 0px 10px 0px rgba(0,0,0,0.82);
    background-color: #cacaca;
`

export const HorizontalKnob = styled.div`
    & {
        width: 70px;
        height: 70px;
        background-color: rgb(55,57,59);
        box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.83);
        border-radius: 50%;

        animation-name: ${rotateHorizontalAnimation};
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

export const VerticalContainer = styled(Container)`
    width: 35px;
    height: 150px;
    flex-direction: column;
`

export const VerticalKnob = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgb(55,57,59);
    background-image: url(${texture});

    animation-name: ${rotateVerticalAnimation};
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-play-state: ${props => props.direction !== 'none' ? 'running' : 'paused'};
    animation-direction: ${props => directionMapper[props.direction]};
    animation-fill-mode: none;
    animation-timing-function: linear;
`
