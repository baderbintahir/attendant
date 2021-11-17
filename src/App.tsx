import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { getEmployees } from "./actions/employees";
import CRUDEmployeeList from "./components/CRUDEmployeeList/CRUDEmployeeList";
import { getData } from "./api";
import Login from "./components/Login/Login";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import PunchCard from "./components/PunchCard/PunchCard";
import "./App.css";

const isAuthenticated = JSON.parse(localStorage.getItem("profile"));
const isAdmin = isAuthenticated.role === "admin"

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const employees = getData();
    employees.then((res) => dispatch(getEmployees(res)));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={isAuthenticated ? <PunchCard /> : <Login />} />    
          <Route path='/crud_employees' element={isAuthenticated && isAdmin ? <CRUDEmployeeList /> : <Login />} />
          <Route path='/admin_dashboard' element={isAuthenticated && isAdmin ? <AdminDashboard /> : <Login />} />    
          <Route path="*" element={<h1>404 PAGE NOT FOUND!!!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
