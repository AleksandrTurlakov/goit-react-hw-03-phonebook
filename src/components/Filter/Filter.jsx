import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => (
  <label htmlFor="">
    Find contacts by Name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
