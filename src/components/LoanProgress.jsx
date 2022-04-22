import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LoanProgressTable from '../tables/LoanProgressTable';

const LoanProgress = ({ loanProgress, paid, total }) => {

  const percentage = ((paid / total) * 100).toFixed(0);

  return (
    <div className='loan_progress'>
      <h3>Loan Progress</h3>
      <div className="loan_progress-bar">
        <CircularProgressbar value={percentage} text={`${percentage}%`} 
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',

            // Text size
            textSize: '18px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: '#0dc528',
            textColor: 'rgba(0, 48, 73, 1)',
            trailColor: 'rgba(232, 235, 236, 1)',
          })}
        />
      </div>
      <LoanProgressTable col1="Amount" col2="Description" col3="Date" data={loanProgress}/>
    </div>
  )
}

export default LoanProgress