import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';
import './ReservationDisplay.css';

const ReservationDisplay = () => {

  const reservationCards = reservations.map(reservation => {
    return (
      <ReservationCard
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        guests={reservation.guests}
        id={reservation.id}
        key={reservation.id}
      />
    )
  })

  return (
    <div className='reservations-container'>
      {reservationCards}
    </div>
  )
}

export default ReservationDisplay;
