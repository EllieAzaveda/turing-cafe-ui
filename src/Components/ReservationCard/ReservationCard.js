import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ name, date, time, number, id }) => {
  return (
    <div className='card'>
      <h3 data-cy='name' className='name'>{name}</h3>
      <p data-cy='date' className='date'>{date}</p>
      <p data-cy='time' className='time'>{time}</p>
      <p data-cy='guests' className='guests'>{`Number of guests: ${number}`}</p>
      <button>Cancel</button>
    </div>
  )
}

export default ReservationCard;
