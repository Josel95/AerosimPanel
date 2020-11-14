import React from 'react';

import { Col, Container, Panel, Row } from './styles'

import { Switch } from '../../switch'
import { Button } from '../../button'

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
                            return <Switch topLabel="ON" {...switchElement} />
                        })
                    }
                </Panel>

                <Panel>
                    {
                        rightPanel.map((switchElement) => {
                            return <Switch topLabel="ON" {...switchElement} />
                        })
                    }
                </Panel>
            </Row>

            <Row marginTop="3em" justifyContent="center">
                <Panel padding="1.5em" height="15em">
                    <Col marginRight="1.5em" justifyContent="flex-end">
                        <Button id={11} text="HDG"></Button>
                    </Col>
                    <Col marginRight="1.5em">
                        <Button id={12} text="APR"></Button>
                        <Button id={13} text="NAV"></Button>
                    </Col>
                    <Col  marginRight="1.5em" justifyContent="space-around">
                        <Button id={14} text="AP"></Button>
                        <Button id={15} text="FD"></Button>
                    </Col>
                    <Col  marginRight="1.5em" justifyContent="space-around">
                        <Button id={16} text="LVL"></Button>
                        <Button id={17} text="YD"></Button>
                    </Col>
                    <Col  marginRight="1.5em">

                    </Col>
                    <Col  marginRight="1.5em">
                        <Button id={18} text="IAS"></Button>
                        <Button id={19} text="VNV"></Button>
                        <Button id={20} text="VS"></Button>
                    </Col>
                    <Col justifyContent="flex-end">
                        <Button id={21} text="ALT"></Button>
                    </Col>
                </Panel>
            </Row>


        </Container>
    )
}