import React, { useState, useEffect } from 'react'
import LoanCard from '../components/LoanCard'
import LoanProgress from '../components/LoanProgress'
import { useData } from '../context/dataContext';

const Outstanding = ({approvedLoans, paidLoans }) => {
  const { payments } = useData();

  const [loanId, setLoanId] = useState('');
  const [loanProgress, setLoanProgress] = useState([]);
  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(0);


  useEffect(() => {
    setLoanProgress(payments.filter(payment => payment.loanId === loanId))
  }, [payments, loanId]);


  return (
    <div className='tab_container'>
      <div className='flex'>
      {approvedLoans?.map(loan => ( 
        <LoanCard loan={loan} key={loan.id} setLoanId={setLoanId} setPaid={setPaid} setTotal={setTotal} loanProgress={loanProgress} paid={paid} total={total}/> 
      ))}
      </div>
      {loanId && <LoanProgress key={paidLoans.id} loanProgress={loanProgress} paid={paid} total={total}/>}
    </div>
  )
}

export default Outstanding