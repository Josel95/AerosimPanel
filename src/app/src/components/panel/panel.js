import React from 'react';

import { Switch } from '../switch'

export default (props) => {

    let { botones, palancas, llave, onButtonChange, onKeyChange, onPalancaChange } = props

    return (
        <div className="App">
            <Switch
                onChange={(valor) => onButtonChange(0, valor)}
                initialValue={botones[0]}
                topLabel="ON"
                bottomLabel="OFF"
                name='ALT' />
        </div>
    )
}