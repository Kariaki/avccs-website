import React, { useState } from 'react';
import Header from '../components/Header';
import Outstanding from '../tabs/Outstanding';
import Pending from '../tabs/Pending';
import ProfileHeader from '../components/ProfileHeader';

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState("tab1");

   const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

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
          {activeTab === "tab1" ? <Outstanding /> :  <Pending/>}
      </div>
    </React.Fragment>
  )
}

export default Dashboard