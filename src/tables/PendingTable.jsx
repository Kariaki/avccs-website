import React from 'react';

const PendingTable = ({col1, col2, col3, col4, data}) => {

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr className="table_header">
            <th>{col1}</th>
            <th>{col2}</th>
            <th>{col3}</th>
            <th>{col4}</th>
          </tr>
        </thead>
        {data?.map(row => (
          <tbody key={row.id}>
            <tr>
              <td>₦{row.amount.toLocaleString()}</td>
              <td>{row.category}</td>
              <td>{row.percentage}%</td>
              <td>{row.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    );
};

export default PendingTable;
