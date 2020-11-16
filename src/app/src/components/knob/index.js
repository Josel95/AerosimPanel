import React, { useState, useRef, useEffect } from 'react'

import { Container, Knob as KnobStyled } from './styles'

import { sendButton } from '../../service/send'

export const Knob = ({
    leftId,
    rightId,
    pressId
}) => {

    const knobRef = useRef()

    const [degrees, setDegrees] = useState(0)

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

        const delta = lastPosition[0] - knobPosition[0]

        const direction = delta > 0 ? 'right' : 'left'

        setDegrees((degrees + 1 * 5 * (delta > 0 ? 1 : -1)) % 360)

        setDirection(direction)
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

        sendButton(leftId, {active: false})
        sendButton(rightId, {active: false})

    }, [direction, leftId, rightId])

    return (
        <Container>
            <KnobStyled
                ref={knobRef}
                direction={direction}
                onClick={handleClick}
                onTouchStart={handleTouchDown}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </Container>
    )
}