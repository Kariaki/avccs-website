import { Routes, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ledger from "./pages/Ledger";

//Components
import PrivateRoute from "./utils/PrivateRoute";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <div className="mobile">Please view on a desktop device</div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ledger" element={<Ledger />} />
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
