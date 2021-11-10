import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { createEmployee } from "../../actions/employees";
import NewEmployeeForm, {
  EmployeeType,
} from "../NewEmployeeForm/NewEmployeeForm";
import EmployeeList from '../EmployeeList/EmployeeList'

import "./Table.css";

const Table: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { employees: [] }) => state);
  const [showForm, setShowForm] = React.useState(false);

  const handleSubmit = (newEmployee: Partial<EmployeeType>) => {    
    dispatch(createEmployee(state, newEmployee));
    setShowForm(false);
  };

  // validation function will go here

  return (
    <div className="Table">
      <div className="table-wrapper">
        <h1 className="table-title">All Employees</h1>
        <button className="add-employee-btn" onClick={() => setShowForm(true)}>
          Add Employee
        </button>

        <EmployeeList />
      </div>
      {showForm ? <NewEmployeeForm handleSubmit={handleSubmit} /> : null}
    </div>
  );
};

export default Table;
