import * as React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getEmployees } from "./actions/employees";
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";
import { getData } from "./api";



const App = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    const employees = getData()
    employees.then(res => dispatch(getEmployees(res)))
  }, []);

  return (
    <div className="App">
      <EmployeeContainer />
    </div>
  );
};

export default App;
