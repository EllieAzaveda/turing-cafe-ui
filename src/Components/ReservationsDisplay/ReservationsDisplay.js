import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';
import './ReservationsDisplay.css';

const ReservationDisplay = ({ reservationData, deleteReservation }) => {

  const reservationCards = reservationData.map(res => {
    return (
      <ReservationCard
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        id={res.id}
        key={res.id}
        deleteReservation={deleteReservation}
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
