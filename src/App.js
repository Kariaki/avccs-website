import { Routes, Route } from "react-router-dom";

//Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ledger from "./pages/Ledger";

//Components
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ledger" element={<Ledger />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
