import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
      this.state = {
        name: '',
        date: '',
        time: '',
        number: ''
      }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = event => {
    event.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...this.state
    }
    this.props.addReservation(newReservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name: '', date: '', time: '', number: '' });
  }

  render() {
    return (
      <form>
        <input
          data-cy='name'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />

        <input
          data-cy='date'
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />

        <input
          data-cy='time'
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />

        <input
          data-cy='number'
          type='text'
          placeholder='Number of Guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />

        <button data-cy='submit-button'
          style={{ color: '#CCCCCC', backgroundColor: '#008080', width: '16%' }}
          onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </form>
    )
  }

}

export default Form;
