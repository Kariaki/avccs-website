import React from 'react';
import Avatar from 'react-avatar';
import PaymentHistoryTable from '../tables/PaymentHistoryTable';

const PaymentsHistory = ({data2, clickId}) => {
  return (
    <div className='payments_history'>
      <Avatar color="rgba(0, 48, 73, 1)" name="John Doe" size="60" round={true} className="avatar"/>
      <div className="payments_history-progress">
        <p>Progress</p>
        <div></div>
      </div>
      <PaymentHistoryTable col1="Amount" col2="Description" col3="Date" data={data2} clickId={clickId}/>
    </div>
  )
}

export default PaymentsHistory