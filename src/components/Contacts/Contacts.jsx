import React from 'react';
import PropTypes from 'prop-types';

export const Contacts = ({ contacts, onDeleleteContact }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onDeleleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleleteContact: PropTypes.func.isRequired,
};
