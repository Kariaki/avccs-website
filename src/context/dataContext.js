import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, query, onSnapshot } from "firebase/firestore";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

const AuthProvider = ({ children }) => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const data = query(collection(db, "payments"));
    onSnapshot(data, (querySnapshot) => {
      setPayments(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const values = {
    payments,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default AuthProvider;
