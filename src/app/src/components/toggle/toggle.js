import React, {useState, useEffect} from 'react'

import './toggle.css'

export default (props) => {
    const { color, text, value, onChange } = props

    let [state, setState] = useState(value || false)

    useEffect(() => {
        if(onChange){
            onChange(state)
        }
    }, [state])

    return (
        <button onClick={() => setState(!state)} className="toggle">
            <div className="toggle-text">
                {text}
            </div>
            <div className="toggle-state">
                <div className={`toggle-state-light ${color} ${state ? 'on' : 'off'}`}/>
            </div>
        </button>
    )
}