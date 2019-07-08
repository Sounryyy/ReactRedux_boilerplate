import React, { Component } from 'react';

import './css.css'

class App extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h1> React is working!!!!!!!!!!!</h1>
                <h1 className='red'>Hello world!</h1><h2>Осталось - Router, Redux, eslint, prettier, babel(+es6, +react)</h2>
            </div>
        );
    }
}

export default App;