import React from 'react';
import PendingTable from '../tables/PendingTable';

const Pending = ({ pendingLoans }) => {
  return (
    <div className='tab_container'>
      {pendingLoans.length < 1 ? <p>You currently do not have any pending loan</p> : 
        <PendingTable col1="Amount" col2="Category" col3="Percentage" col4="Date" data={pendingLoans}/>
      }
    </div>
  )
}

export default Pending