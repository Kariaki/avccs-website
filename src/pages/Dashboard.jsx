import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Outstanding from '../tabs/Outstanding';
import Pending from '../tabs/Pending';
import ProfileHeader from '../components/ProfileHeader';
import { useAuth } from '../context/authContext';

import { db } from '../firebase-config';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import AuthError from '../components/AuthError';
import Spinner from '../components/Spinner';

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("tab1");
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pendingLoans, setPendingLoans] = useState([]);
  const [approvedLoans, setApprovedLoans] = useState([]);
  const [paidLoans, setPaidLoans] = useState([]);
  const { user } = useAuth();

   const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };


  useEffect(() => {
    setLoading(true);
    try {
      const data = query(
      collection(db, "loans"),
      where("userId", "==", user.uid)
      );
      onSnapshot(data, (querySnapshot) => {
        setLoans(querySnapshot.docs.map((doc) => doc.data()));
      });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
    
  }, [user.uid]);


  useEffect(() => {
    setPendingLoans(loans.filter(loan => loan.state === 'PENDING'));
    setApprovedLoans(loans.filter(loan => loan.state === 'APPROVED'));
    setPaidLoans(loans.filter(loan => loan.state === 'PAID'));
  }, [loans]);


  return (
    <React.Fragment>
      <Header />
      <div className='container dashboard'>
        <ProfileHeader />
        <ul className="tab-nav">
          <li className={activeTab === "tab1" ? "active active-color" : ""} onClick={handleTab1}>Outstanding</li>
          <li className={activeTab === "tab2" ? "active active-color" : ""} onClick={handleTab2}>Pending</li>
        </ul>
        <div className="underline"></div>
          {loading && <Spinner />}
          {error && <AuthError component={error}/>}
          {activeTab === "tab1" ? <Outstanding approvedLoans={approvedLoans} paidLoans={paidLoans}/> :  <Pending pendingLoans={pendingLoans}/>}
      </div>
    </React.Fragment>
  )
}

export default Dashboard