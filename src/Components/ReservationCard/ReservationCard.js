import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ name, date, time, number, id, deleteReservation }) => {
  return (
    <div className='card' style={{ backgroundColor: 'white',  color: '#008080' }}>
      <h3 data-cy='name' className='name'>{name}</h3>
      <p data-cy='date' className='date'>{date}</p>
      <p data-cy='time' className='time'>{time}</p>
      <p data-cy='guests' className='guests'>{`Number of guests: ${number}`}</p>
      <button className='delete-button'
        style={{ color: '#CCCCCC', backgroundColor: '#008080', width: '12rem' }}
        onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  )
}

export default ReservationCard;
