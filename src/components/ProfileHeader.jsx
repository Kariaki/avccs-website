import React, { useState } from 'react';
import moment from 'moment';
import Avatar from 'react-avatar';
import { useAuth } from '../context/authContext';


const ProfileHeader = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { logout, user } = useAuth();

  const handleClick = async () => {
    await logout();
    setIsClicked(prev => !prev) 
  }

  return (
    <div className="profile_header-container">
      <div className='profile_header'>
        <h2>Today</h2>
        <p>{moment(new Date()).format('LLLL').slice(0, -8)}</p>
      </div>
      <div className="profile" onClick={handleClick}>
        {!isClicked &&
          <React.Fragment>
            <Avatar color="rgba(0, 48, 73, 1)" name={user?.displayName ? `${user?.displayName?.split(' ')[0]} ${user?.displayName?.split(' ')[1]}`: "John Doe"} size="40" round={true} />
            <p>Logout</p>
          </React.Fragment>
        }
      </div>
    </div>
    
  )
}

export default ProfileHeader