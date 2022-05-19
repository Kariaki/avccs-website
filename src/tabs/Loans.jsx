import React, { useState, useEffect } from 'react';
import LoanApplication from '../components/LoanApplication';
import PaymentsHistory from '../components/PaymentsHistory';
import LoansTable from '../tables/LoansTable';
import { useData } from '../context/dataContext';

// import { db } from '../firebase-config';
// import { deleteDoc, doc } from "firebase/firestore";

const Loans = ({ loans }) => {
  const { payments } = useData();

  const [clickId, setClickId] = useState();
  const [clickedLoan, setClickedLoan] = useState([]);

  useEffect(() => {
    setClickedLoan(payments.filter(payment => payment.loanId === clickId))
  }, [payments, clickId])

  // const handleDelete = async (clickId) => {
  //   await deleteDoc(doc(db, "loans", clickId));
  // }

  const loan = loans.filter(loan => loan.id === clickId);

  const percentage = loan && ((loan[0]?.payment / loan[0]?.amount) * 100).toFixed(0);

  return (
    <div className='tab_container'>
      {loans.length < 1 ? <p>You currently do not have any loan</p> : 
      <LoansTable col1="Category" col2="Amount" col3="Description" col4="Percentage" col5="Date" data={loans} setClickId={setClickId}/>
      }
      <div className="sub_tab-container">
        {clickId ? <PaymentsHistory data={clickedLoan} loans={loans} percentage={percentage}/> : <LoanApplication /> }
         {/* <button onClick={() => handleDelete(clickId)}>delete</button> */}
      </div>
     
    </div>
  )
}

export default Loans