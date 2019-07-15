import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const FilterLink = ({ filter, children }) => (
  <Link to={filter === 'all' ? '' : filter}>{children}</Link>
);

export default FilterLink;
