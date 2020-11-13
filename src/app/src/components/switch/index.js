import React, { useRef, useEffect } from "react";

import { Container, Input, Label, Name } from './styles'

export const Switch = ({
    name,
    topLabel,
    bottomLabel,
    onChange,
    initialValue = false
}) => {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.checked = initialValue
    }, [])

    const handleChange = () => {
        onChange(inputRef.current.checked)
    }

    return (
        <Container>
            {
                topLabel &&
                <Label for="check">{topLabel}</Label>
            }
            <Input ref={inputRef} id="check" type="checkbox" onChange={handleChange} />
            {
                bottomLabel &&
                <Label for="check">{bottomLabel}</Label>
            }
            {
                name &&
                <Name>{name}</Name>
            }
        </Container>
    );
};
