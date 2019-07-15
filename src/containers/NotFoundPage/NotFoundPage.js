import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterLink from 'src/components/FilterLink/index';

class NotFoundPage extends Component {
  render() {
    return (
      <div>
        Its 404 Page - Not found <br />
        <FilterLink filter="all">Go to initial page</FilterLink>
      </div>
    );
  }
}

export default connect(state => ({
  testStore: state
}))(NotFoundPage);
