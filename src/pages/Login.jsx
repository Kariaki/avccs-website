import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/authContext';


const Login = () => {

  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstName = staffId.split(" ")[0];
    const lastName = staffId.split(" ")[1];
    const name = `${firstName}.${lastName}@avccs.com`.toLowerCase();

    await login(name, password);

    navigate(from, { replace: true });

  }
  return (
    <div className='login'>
      <div className="login_top-corner login_addon"></div>

      <div className="login_form-container">

        <div className="login_form-container-logo">
          <h2>Avccs</h2>
        </div>

      <h3>Welcome</h3>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={staffId} onChange={e => setStaffId(e.target.value)} placeholder="Staff Id"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        <button>Login</button>
      </form>
      </div>
      <div className="login_bottom-corner login_addon"></div>
    </div>
  )
}

export default Login