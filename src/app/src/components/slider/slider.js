import React, {useState} from 'react'

import './slider.css'

export default (props) => {

    const { color, onChange } = props

    return (
        <div className="row">
            <div className="col-12">
                <input onChange={onChange} min={0} max={32767} defaultValue={0} type="range" orient="vertical"/>
            </div>
            <div className="col-12">
                <div className={`indicador ${color}`}/>
            </div>
        </div>
    )
}