import React from 'react';

import { Col, Row } from '../../sharedStyles'

import { Container, Panel } from './styles'

import { Autopilot } from './Autopilot'

import { Switch } from '../../switch'
import { Button } from '../../button'
import { Knob } from '../../knob'
import { Key } from '../../key';

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
            <Row>
                <Panel>
                    {
                        leftPanel.map((switchElement) => {
                            return <Switch key={switchElement.id} topLabel="ON" {...switchElement} />
                        })
                    }
                </Panel>

                <Panel>
                    {
                        rightPanel.map((switchElement) => {
                            return <Switch key={switchElement.id} topLabel="ON" {...switchElement} />
                        })
                    }
                </Panel>
            </Row>

            <Row marginTop="3em">
                <Panel padding="1.5em" height="15em">
                    <Autopilot />
                </Panel>

                <Panel padding="2em">
                    <Key id={30}/>
                </Panel>
            </Row>


        </Container>
    )
}