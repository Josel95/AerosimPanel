import React, { useState, useRef, useEffect, Fragment } from 'react'

import { Label } from '../sharedStyles'

import { HorizontalContainer, HorizontalKnob, VerticalContainer, VerticalKnob } from './styles'

import { sendButton } from '../../service/send'

export const Knob = ({
    leftId,
    rightId,
    pressId,
    text,
    vertical = false,
    upId,
    downId,
    topText,
    bottomText
}) => {

    const knobRef = useRef()

    const [direction, setDirection] = useState('none')

    const [knobPosition, setKnobPosition] = useState([0, 0])

    const handleTouchDown = () => {
        const knobRect = knobRef.current.getBoundingClientRect()
        setKnobPosition([
            knobRect.left + (knobRect.right - knobRect.left) / 2 ,
            knobRect.top + (knobRect.bottom - knobRect.top) / 2
        ])
    }

    const handleTouchEnd = () => {
        setDirection('none')
    }

    const handleTouchMove = (e) => {
        const lastPosition = [
            e.touches[0].clientX,
            e.touches[0].clientY  
        ]

        const deltaHorizontal = lastPosition[0] - knobPosition[0]

        const deltaVertical = lastPosition[1] - knobPosition[1]

        const directionHorizontal = deltaHorizontal > 0 ? 'right' : 'left'

        const directionVertical = deltaVertical > 0 ? 'down' : 'up'

        setDirection( vertical ? directionVertical : directionHorizontal)
    }

    const handleClick = () => {
        sendButton(pressId)
    }

    useEffect(() => {
        if(direction === 'right') {
            sendButton(rightId, {active: true})
            sendButton(leftId, {active: false})
            return
        }

        if(direction === 'left') {
            sendButton(leftId, {active: true})
            sendButton(rightId, {active: false})
            return
        }

        if(direction === 'up') {
            sendButton(upId, {active: true})
            sendButton(downId, {active: false})
            return
        }

        if(direction === 'down') {
            sendButton(downId, {active: true})
            sendButton(upId, {active: false})
            return
        }

        sendButton(leftId, {active: false})
        sendButton(rightId, {active: false})

        sendButton(downId, {active: false})
        sendButton(upId, {active: false})

    }, [direction, leftId, rightId, downId, upId])

    if(!vertical){
        return (
            <Fragment>
                <Label>{text}</Label>
                <HorizontalContainer>
                    <HorizontalKnob
                        ref={knobRef}
                        direction={direction}
                        onClick={handleClick}
                        onTouchStart={handleTouchDown}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    />
                </HorizontalContainer>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <VerticalContainer>
                <Label>{topText}</Label>

                <VerticalKnob
                    ref={knobRef}
                    direction={direction}
                    onTouchStart={handleTouchDown}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd} />

                <Label>{bottomText}</Label>
            </VerticalContainer>
        </Fragment>
    )
}