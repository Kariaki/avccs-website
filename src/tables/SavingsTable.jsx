import React from 'react';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const SavingsTable = ({col1, col2, col3, col4, data}) => {

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
              <td>{`${row.description}`.charAt(0).toUpperCase() + `${row.description}`.slice(1)}</td>
              <td>{row.amount >= 0 ? <MdArrowDropUp size={18} color='green'/> : <MdArrowDropDown size={18} color='red'/>}</td>
              <td>{row.date}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
    );
};

export default SavingsTable;
