import React, { useState } from 'react';
import './App.css';

import Fullscreen from 'react-full-screen'

import Panel from './containers/panel'

function App() {

    let [isFull, setFull] = useState(false)

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <button onClick={() => setFull(true)}>fullScreen</button>
            </nav>

            <Fullscreen enabled={isFull} onChange={full => setFull(full)}>

                <Panel/>

            </Fullscreen>


        </div>
    );
}

export default App;
