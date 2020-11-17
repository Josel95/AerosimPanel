import React from 'react'

import { sendButton } from '../../service/send'

import { Container, Key as StyledKey } from './styles'

const KEY_SPEED = 0.25

export const Key = ({
    id
}) => {

    const handleTouchStart = () => {
        setTimeout(() => {
            sendButton(id, { active: true })
        }, KEY_SPEED * 1000)
    }

    const handleTouchEnd = () => {
        sendButton(id, { active: false })
    }

    return (
        <Container>
            <StyledKey
                animationTime={KEY_SPEED}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd} />
        </Container>
    )
}