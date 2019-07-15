import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLink from 'src/components/FilterLink/index';

class App extends Component {
  render() {
    return (
      <div>
        Hello world! <br />
        <FilterLink filter="Info">Go to 404 page</FilterLink>
      </div>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(App);
