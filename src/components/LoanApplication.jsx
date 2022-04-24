import React, { useState } from 'react';
import Avatar from 'react-avatar';
import moment from 'moment';
import { useAuth } from '../context/authContext';

import { db } from '../firebase-config';
import { addDoc, collection, updateDoc } from "firebase/firestore";

const LoanApplication = () => {

  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      date: moment(new Date()).format('DD-MM-YYY'),
      amount,
      category,
      description,
      payment: 0,
      percentage: 5,
      state: 'PENDING',
      type: 0,
      userId: user.uid
    }  
    const docRef = await addDoc(collection(db, "loans"), data);

    //Update the id field with firebase generated id
    await updateDoc(docRef, {
        id: docRef.id
      });

    setAmount('');
    setCategory('');
    setDescription('');
  }

  return (
    <form onSubmit={handleSubmit} className='loan_application'>
        <Avatar color="rgba(0, 48, 73, 1)" name="John Doe" size="60" round={true} className="avatar"/>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount"/>
      <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category"/>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description"/>
      <button>Apply</button>
    </form>
  )
}

export default LoanApplication