import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };

  NameInputId = nanoid();
  NumberInputId = nanoid();

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  reset = () => {
    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { handleSubmit, NameInputId, NumberInputId, handleChange } = this;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={NameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            id={NameInputId}
          />
        </label>
        <label htmlFor={NumberInputId}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            id={NumberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
