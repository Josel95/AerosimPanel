import React, {useState} from 'react'

import './toggle.css'

export default (props) => {
    const { color, text } = props

    let [ state, setState ] = useState(false)

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