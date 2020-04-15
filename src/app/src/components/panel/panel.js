import React from 'react';

import Toggle from '../toggle/toggle'

import Key from '../key/key'

import Slider from '../slider/slider'

export default (props) => {

    let { botones, palancas, llave, onButtonChange, onKeyChange, onPalancaChange } = props

    return (
        <div className="App">
            <div className='row'>
                <div className='col-9'>
                    <div className='row'>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(0, valor)} value={botones[0]} value={botones[0]} color="red" text='ALT' />
                        </div>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(1, valor)} value={botones[1]} color="red" text='BAT' />
                        </div>
                        <div className="col-2 offset-2">
                            <Toggle onChange={(valor) => onButtonChange(2, valor)} value={botones[2]} color="red" text='AVIONICS' />
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(3, valor)} value={botones[3]} color="green" text='BEACON' />
                        </div>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(4, valor)} value={botones[4]} color="green" text='LAND' />
                        </div>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(5, valor)} value={botones[5]} color="green" text='TAXI' />
                        </div>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(6, valor)} value={botones[6]} color="green" text='NAV' />
                        </div>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(7, valor)} value={botones[7]} color="green" text='STROBE' />
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(8, valor)} value={botones[8]} color="green" text='FUEL PUMP' />
                        </div>
                        <div className="col-2">
                            <Toggle onChange={(valor) => onButtonChange(9, valor)} value={botones[9]} color="green" text='PITOT HEAT' />
                        </div>
                    </div>
                </div>

                <div className='col-3'>
                    <div className="row">
                        <div className="col-12">
                            <Key onChange={(valor) => onKeyChange(valor)} value={llave}/>
                        </div>
                    </div>
                    <div className="row center full">
                        <div className="col-4">
                            <Slider onChange={(valor) => onPalancaChange(0, valor)} value={palancas[0]} color="black" />
                        </div>
                        <div className="col-4">
                            <Slider onChange={(valor) => onPalancaChange(1, valor)} value={palancas[1]} color="blue" />
                        </div>
                        <div className="col-4">
                            <Slider onChange={(valor) => onPalancaChange(2, valor)} value={palancas[2]} color="red" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}