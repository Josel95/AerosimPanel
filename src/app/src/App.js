import React, { useState } from 'react';

import Fullscreen from 'react-full-screen'

import { XCubPanel } from './components/paneles/xcub'

function App() {

    let [isFull, setFull] = useState(false)

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <button onClick={() => setFull(true)}>fullScreen</button>
            </nav>

            <Fullscreen enabled={isFull} onChange={full => setFull(full)}>

                <XCubPanel/>

            </Fullscreen>


        </div>
    );
}

export default App;
