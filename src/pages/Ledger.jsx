import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Loans from '../tabs/Loans';
import Savings from '../tabs/Savings';
import ProfileHeader from '../components/ProfileHeader';
import { useAuth } from '../context/authContext';


import { db } from '../firebase-config';
import { collection, query, where, onSnapshot } from "firebase/firestore";

const Ledger = () => {

  const [activeTab, setActiveTab] = useState("tab1");
  const [loans, setLoans] = useState([]);
  const [savings, setSavings] = useState([]);
  const { user } = useAuth();

   const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  useEffect(() => {
    const data = query(
      collection(db, "loans"),
      where("userId", "==", user.uid)
    );
    onSnapshot(data, (querySnapshot) => {
      setLoans(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, [user.uid]);


  useEffect(() => {
    const data = query(
      collection(db, "savings"),
      where("userId", "==", user.uid)
    );
    onSnapshot(data, (querySnapshot) => {
      setSavings(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, [user.uid]);

  return (
    <React.Fragment>
      <Header />
      <div className='container ledger'>
        <ProfileHeader />
        <ul className="tab-nav">
          <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Loans</li>
          <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Savings</li>
        </ul>
        <div className="underline"></div>
          {activeTab === "tab1" ? <Loans loans={loans}/> :  <Savings savings={savings}/>}     
      </div>
    </React.Fragment>
    
  )
}

export default Ledger