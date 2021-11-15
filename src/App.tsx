import * as React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from "react-redux";
import "./App.css";
import { getEmployees } from "./actions/employees";
import CRUDEmployeeList from "./components/CRUDEmployeeList/CRUDEmployeeList";
import { getData } from "./api";
import Employees from "./components/Employees/Employees";
import Login from "./components/Login/Login";

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
          <Route path='/' element={<CRUDEmployeeList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/all_employees' element={<Employees type="all" />} />
          <Route path='/available_employees' element={<Employees type="available" />} />
          <Route path='/unavailable_employees' element={<Employees type="unavailable" />} />
          <Route path='/on_leave_employees' element={<Employees type="on_leave" />} />
          <Route path="*" element={<h1>404 PAGE NOT FOUND!!!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
