import React from 'react';

const PaymentHistoryTable = ({col1, col2, col3, data}) => {

   return (
    <div className="payment_history-table-container">
      <table>
        <thead>
          <tr className="table_header">
            <th>{col1}</th>
            <th>{col2}</th>
            <th>{col3}</th>
          </tr>
        </thead>
        {data?.map(row => (
          <tbody key={row.id}>
            <tr>
              <td>₦{row.amount.toLocaleString()}</td>
              <td>{`${row.description}`.charAt(0).toUpperCase() + `${row.description}`.slice(1)}</td>
              <td>{row.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    );
}

export default PaymentHistoryTable