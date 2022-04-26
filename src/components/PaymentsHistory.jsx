import React from 'react';
import Avatar from 'react-avatar';
import PaymentHistoryTable from '../tables/PaymentHistoryTable';
import LinearProgressBar from './LinearProgressBar';

const PaymentsHistory = ({data, clickId, percentage}) => {
  
  return (
    <div className='payments_history'>
      <Avatar color="rgba(0, 48, 73, 1)" name="John Doe" size="60" round={true} className="avatar"/>
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