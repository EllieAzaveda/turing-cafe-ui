import React, { Component } from 'react';
import ReservationsDisplay from '../ReservationsDisplay/ReservationsDisplay';
import Form from '../Form/Form';
import { fetchAllReservations } from '../../APICalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        reservationData: []
      }
  }

  addReservation = (newReservation) => {
    this.setState({ reservationData: [...this.state.reservationData, newReservation] })
  }

  deleteReservation = (id) => {
    const filteredReservations = this.state.reservationData.filter(res => res.id !== id);
      this.setState({ reservationData: filteredReservations });
  }

  componentDidMount() {
    fetchAllReservations()
      .then(allReservations => {
        this.setState({ reservationData: allReservations })
      })
      .catch(err => this.setState({ error: 'Something went wrong. Please try again later.'} ))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationsDisplay reservationData={this.state.reservationData} deleteReservation={this.deleteReservation} />
        </div>
      </div>
    )
  }
}

export default App;
