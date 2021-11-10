import * as React from "react";
import { useDispatch } from "react-redux";
import Table from "./components/Table/Table";
import "./App.css";
import { getEmployees } from "./actions/employees";

const App = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getEmployees())
  }, []);

  return (
    <div className="App">
      <Table />
    </div>
  );
};

export default App;
