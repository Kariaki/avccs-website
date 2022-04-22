import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoanCard = ({ loan, setLoanId, setPaid, setTotal }) => {

  const navigate = useNavigate();

  const handleClick = (loan) => {
    setLoanId(loan.id);
    setTotal(loan.amount);
    setPaid(loan.payment);
  }

  return (
    <div className='loan_card' onClick={() => handleClick(loan)}>
      <div className="loan_card-details">
        <h5>{loan.category}</h5>
        <p>Amount: ₦{loan.amount.toLocaleString()}</p>
        <p>Paid: ₦{loan.payment.toLocaleString()}</p>
      </div>

      <div className="loan_card-progress">
        <p>2days ago</p>
        <div></div>
        <button onClick={() => navigate('/ledger')}>View ledger</button>
      </div>
    </div>
  )
}

export default LoanCard