import React from 'react';
import './ReservationCard.css';

const ReservationCard = () => {
  return (
    <div className='card'>
      <h3 data-cy='name' className='name'>Name</h3>
      <p data-cy='date' className='date'>Date</p>
      <p data-cy='time' className='time'>Time</p>
      <p data-cy='guests' className='guests'>Number of guests: guests</p>
      <button>Cancel</button>
    </div>
  )
}

export default ReservationCard;
