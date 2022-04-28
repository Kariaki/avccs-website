import React from 'react';

const LoansTable = ({col1, col2, col3, col4, col5, data, setClickId}) => {

  return (
    <div className="table_container">
      <table>
        <thead>
          <tr className="table_header">
            <th>{col1}</th>
            <th>{col2}</th>
            <th>{col3}</th>
            <th>{col4}</th>
            <th>{col5}</th>
          </tr>
        </thead>
        {data?.map(row => (
          <tbody key={row.id}>
            <tr onClick={() => setClickId(row.id)} >
              <td>{row.category}</td>
              <td>₦{row?.amount.toLocaleString()}</td>
              <td>{row.description}</td>
              <td>{row.percentage}%</td>
              <td>{row.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    );
};

export default LoansTable;
