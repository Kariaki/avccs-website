import React from 'react';

const AuthError = ({component}) => {
  return (
    <div className="error_container">
      <p>{component}</p>
    </div>
  )
}

export default AuthError