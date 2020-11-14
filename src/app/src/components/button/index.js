import React from 'react'

import { Button as ButtonStyled } from './styles'

import { sendButton } from '../../service/send'

export const Button = ({
    id,
    text
}) => {
    return (
        <ButtonStyled onClick={() => sendButton(id)}>{text}</ButtonStyled>
    )
}