import React from 'react';
import Avatar from 'react-avatar';
import PaymentHistoryTable from '../tables/PaymentHistoryTable';
import LinearProgressBar from './LinearProgressBar';
import { useAuth } from '../context/authContext';

const PaymentsHistory = ({data, clickId, percentage}) => {
  
  const { user } = useAuth();

  return (
    <div className='payments_history'>
      <Avatar color="rgba(0, 48, 73, 1)" name={user?.displayName ? `${user?.displayName?.split(' ')[0]} ${user?.displayName?.split(' ')[1]}`: "John Doe"} size="60" round={true} className="avatar"/>
      <div className="payments_history-progress">
        <p>Progress</p>
        <div>
          <LinearProgressBar value={percentage}/>
        </div>
      </div>
      <PaymentHistoryTable col1="Amount" col2="Description" col3="Date" data={data} clickId={clickId}/>
    </div>
  )
}

export default PaymentsHistory