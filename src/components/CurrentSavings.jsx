import React from 'react';
import Avatar from 'react-avatar';

const CurrentSavings = ({ currentSavings }) => {
  return (
    <div className='current_savings'>
      <Avatar color="rgba(0, 48, 73, 1)" name="John Doe" size="60" round={true} className="current_savings-avatar"/>
      <div className="current_savings-amount">
        <p>Current Savings: </p>
        <h3>₦ {currentSavings?.savings.toLocaleString()}</h3>
      </div>
      
    </div>
  )
}

export default CurrentSavings