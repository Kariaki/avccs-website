import React, { useState } from 'react';
import Avatar from 'react-avatar';
import moment from 'moment';
import { useAuth } from '../context/authContext';

import { db } from '../firebase-config';
import { addDoc, collection, updateDoc } from "firebase/firestore";

const LoanApplication = () => {

  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('soft');
  const [description, setDescription] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      date: moment(new Date()).format('DD-MM-YYYY'),
      amount,
      category: category.toUpperCase(),
      description,
      payment: 0,
      percentage: 0,
      state: 'PENDING',
      type: 0,
      userId: user.uid
    }  
    const docRef = await addDoc(collection(db, "loans"), data);

    //Update the id field with firebase generated id
    await updateDoc(docRef, {
        id: docRef.id,
        percentage: category === 'soft' ? 5 : category === 'compassionate' ? 5 : category === 'normal' ? 5 : category === 'household' ? 10 : 20
      });

    setAmount(0);
    setCategory('');
    setDescription('');
  }  

  return (
    <form onSubmit={handleSubmit} className='loan_application'>
        <Avatar color="rgba(0, 48, 73, 1)" name="John Doe" size="60" round={true} className="avatar"/>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" required/>
      <select value={category} onChange={e => setCategory(e.target.value)} placeholder="Category">
        <option value="soft">Soft</option>
        <option value="compassionate">Compassionate</option>
        <option value="normal">Normal</option>
        <option value="household">Household</option>
        <option value="special">Special</option>
      </select>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required/>
      <button>Apply</button>
    </form>
  )
}

export default LoanApplication