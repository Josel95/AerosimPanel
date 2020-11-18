import React from 'react';

import { Container, Panel } from './styles'

import { AreaAutopilot, AreaKey, AreaLeftSwitch, AreaRightSwitch, AreaThrottle } from './styles'

import { Autopilot } from './Autopilot'

import { Switch } from '../../switch'

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
            <AreaThrottle>
                
            </AreaThrottle>

            <AreaLeftSwitch>
                <Panel padding="1.5em">
                    {
                        leftPanel.map((switchElement) => {
                            return <Switch key={switchElement.id} topLabel="ON" {...switchElement} />
                        })
                    }
                </Panel>
            </AreaLeftSwitch>

            <AreaRightSwitch>
                <Panel padding="1.5em">
                    {
                        rightPanel.map((switchElement) => {
                            return <Switch key={switchElement.id} topLabel="ON" {...switchElement} />
                        })
                    }
                </Panel>
            </AreaRightSwitch>

            <AreaAutopilot>
                <Panel padding="1.5em" height="15em">
                    <Autopilot />
                </Panel>
            </AreaAutopilot>

            <AreaKey>
                <Key id={30}/>
            </AreaKey>
        </Container>
    )
}