import React from 'react';
import Avatar from 'react-avatar';
import { useAuth } from '../context/authContext';

const CurrentSavings = ({ currentSavings }) => {
  
  const { user } = useAuth();
  
  return (
    <div className='current_savings'>
      <Avatar color="rgba(0, 48, 73, 1)" name={user?.displayName ? `${user?.displayName?.split(' ')[0]} ${user?.displayName?.split(' ')[1]}`: "John Doe"} size="60" round={true} className="current_savings-avatar"/>
      <div className="current_savings-amount">
        <p>Current Savings: </p>
        <h3>₦ {currentSavings?.savings.toLocaleString()}</h3>
      </div>
      
    </div>
  )
}

export default CurrentSavings