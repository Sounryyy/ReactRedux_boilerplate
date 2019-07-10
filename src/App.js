import React, { Component } from 'react';
import { connect } from 'react-redux';

import './css.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>

      </div>
    );
  }
}

export default connect(state => ({
  testStore: state,
}))(App);
