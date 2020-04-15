import React, {useState, useEffect} from 'react'

import './key.css'

const ESTADOS = ['OFF', 'R', 'L', 'BOTH', 'START']

export default (props) => {
    let { onChange } = props

    let [ posicion, setPosicion ] = useState(0)

    useEffect(() => {
        if(onChange){
            onChange(posicion)
        }
    }, [posicion])

    let handleAvanzar = () => {
        let nuevaPosicion = posicion + 1 >= ESTADOS.length - 1 ? posicion : posicion + 1
        setPosicion(nuevaPosicion)
    }

    let handleRetroceder = () => {
        let nuevaPosicion = posicion - 1 < 0 ? posicion : posicion - 1
        setPosicion(nuevaPosicion)
    }

    let handleMouseDown = () => {
        if(posicion === 3){
            setPosicion(4)
        }
    }

    let handleMouseUp = () => {
        if(posicion === 4){
            setPosicion(3)
        }
    }

    return (
        <div className="key">
            <div className="key-text">
                {ESTADOS[posicion]}
            </div>

            <div className="key-buttons">
                <button onClick={handleRetroceder} className="key-button"></button>
                <button onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleAvanzar} className="key-button"></button>
            </div>
        </div>
    )
}