import React from "react";

import { Label, Name } from '../sharedStyles'

import { Container, Input } from './styles'

import { sendButton } from '../../service/send'

export const Switch = ({
    id,
    name,
    topLabel,
    bottomLabel,
}) =>  (
        <Container>
            {
                topLabel &&
                <Label htmlFor={`check${id}`}>{topLabel}</Label>
            }
            <Input id={`check${id}`} type="checkbox" onChange={() => sendButton(id)} />
            {
                bottomLabel &&
                <Label htmlFor={`check${id}`}>{bottomLabel}</Label>
            }
            {
                name &&
                <Name>{name}</Name>
            }
        </Container>
    );
