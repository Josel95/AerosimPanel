import React, { useState } from 'react';
import './App.css';

import Fullscreen from 'react-full-screen'

import Toggle from './components/toggle/toggle'

import Key from './components/key/key'

import Slider from './components/slider/slider'

function App() {

    let [isFull, setFull] = useState(false)

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <button onClick={() => setFull(true)}>fullScreen</button>
            </nav>

            <Fullscreen enabled={isFull} onChange={full => setFull(full)}>

                <div className="App">
                    <div className='row'>
                        <div className='col-9'>
                            <div className='row'>
                                <div className="col-2">
                                    <Toggle color="red" text='ALT' />
                                </div>
                                <div className="col-2">
                                    <Toggle color="red" text='BAT' />
                                </div>
                                <div className="col-2 offset-2">
                                    <Toggle color="red" text='AVIONICS' />
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className="col-2">
                                    <Toggle color="green" text='BEACON' />
                                </div>
                                <div className="col-2">
                                    <Toggle color="green" text='LAND' />
                                </div>
                                <div className="col-2">
                                    <Toggle color="green" text='TAXI' />
                                </div>
                                <div className="col-2">
                                    <Toggle color="green" text='NAV' />
                                </div>
                                <div className="col-2">
                                    <Toggle color="green" text='STROBE' />
                                </div>
                            </div>

                            <div className='row mt-3'>
                                <div className="col-2">
                                    <Toggle color="green" text='FUEL PUMP' />
                                </div>
                                <div className="col-2">
                                    <Toggle color="green" text='PITOT HEAT' />
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div className="row">
                                <div className="col-12">
                                    <Key />
                                </div>
                            </div>
                            <div className="row center full">
                                <div className="col-4">
                                    <Slider color="black" />
                                </div>
                                <div className="col-4">
                                    <Slider color="blue" />
                                </div>
                                <div className="col-4">
                                    <Slider color="red" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fullscreen>


        </div>
    );
}

export default App;
