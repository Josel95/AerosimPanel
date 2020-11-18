import React, { Fragment } from 'react'

import { Col } from '../../sharedStyles'

import { Button } from '../../button'

import { Knob } from '../../knob'

export const Autopilot = () => {
    return (
        <Fragment>
            <Col marginRight="1.5em" alignItems="center">
                <Knob text="HDG" leftId={22} rightId={23} pressId={24}></Knob>
                <Button id={11} text="HDG"></Button>
            </Col>
            <Col marginRight="1.5em">
                <Button id={12} text="APR"></Button>
                <Button id={13} text="NAV"></Button>
            </Col>
            <Col marginRight="1.5em" justifyContent="space-around">
                <Button id={14} text="AP"></Button>
                <Button id={15} text="FD"></Button>
            </Col>
            <Col marginRight="1.5em" justifyContent="space-around">
                <Button id={16} text="LVL"></Button>
                <Button id={17} text="YD"></Button>
            </Col>
            <Col marginRight="1.5em" justifyContent="center">
                <Knob
                    vertical={true}
                    topText="DN"
                    bottomText="UP"
                    upId={28}
                    downId={29} />
            </Col>
            <Col marginRight="1.5em">
                <Button id={18} text="IAS"></Button>
                <Button id={19} text="VNV"></Button>
                <Button id={20} text="VS"></Button>
            </Col>
            <Col alignItems="center">
                <Knob text="ALT" leftId={25} rightId={26} pressId={27}></Knob>
                <Button id={21} text="ALT"></Button>
            </Col>
        </Fragment>
    )
}