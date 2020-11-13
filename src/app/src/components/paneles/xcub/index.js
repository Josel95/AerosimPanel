import React from 'react';

import { Container, SwitchPanel } from './styles'

import { Switch } from '../../switch'

export const XCubPanel = (props) => {

    const leftPanel = [
        { id: 1, name: "MASTER"},
        { id: 2, name: "ALT FIELD"},
        { id: 3, name: "IGN-LH"},
        { id: 4, name: "IGN-RH"},
        { id: 5, name: "FUEL PMP"},
    ]

    const rightPanel = [
        { id: 6, name: "AV MASTER"},
        { id: 7, name: "STROBE"},
        { id: 8, name: "NAV"},
        { id: 9, name: "LAND"},
        { id: 10, name: "PULSE", topLabel:"STDY"},
    ]

    return (
        <Container>
            <SwitchPanel>
                {
                    leftPanel.map((switchElement) => {
                        return <Switch topLabel="ON" {...switchElement} />
                    })
                }
            </SwitchPanel>

            <SwitchPanel>
                {
                    rightPanel.map((switchElement) => {
                        return <Switch topLabel="ON" {...switchElement} />
                    })
                }
            </SwitchPanel>

        </Container>
    )
}