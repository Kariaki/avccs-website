import React, { useState, useEffect } from 'react';
import CurrentSavings from '../components/CurrentSavings';
import SavingsTable from '../tables/SavingsTable';
import { useAuth } from '../context/authContext';

import { db } from '../firebase-config';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const Savings = ({ savings }) => {

  const { user } = useAuth();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = query(
      collection(db, "users"),
      where('id', '==', user.uid)
    );
    onSnapshot(data, (querySnapshot) => {
      setUsers(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, [user.uid]);
  
  return (
    <div className='tab_container'>
      <SavingsTable col1="Amount" col2="Description" col3="Action" col4="Date" data={savings}/>
      <CurrentSavings currentSavings={users[0]}/>
    </div>
  )
}

export default Savings