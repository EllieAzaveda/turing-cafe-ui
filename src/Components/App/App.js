import React, { Component } from 'react';
import ReservationsDisplay from '../ReservationsDisplay/ReservationsDisplay';
import { fetchAllReservations } from '../../APICalls';
import './App.css';

class App extends Component {
  constructor() {
    super();
      this.state = {
        reservationData: []
      }
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

        </div>
        <div className='resy-container'>
          <ReservationsDisplay reservationData={this.state.reservationData} />
        </div>
      </div>
    )
  }
}

export default App;
