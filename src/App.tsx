import * as React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getEmployees } from "./actions/employees";
import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";

const App = () => {
  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(getEmployees())
  }, []);

  return (
    <div className="App">
      <EmployeeContainer />
    </div>
  );
};

export default App;
