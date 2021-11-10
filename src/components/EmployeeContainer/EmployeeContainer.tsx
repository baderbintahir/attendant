import * as React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { createEmployee } from "../../actions/employees";
import NewEmployeeForm, {
  EmployeeType,
} from "../NewEmployeeForm/NewEmployeeForm";
import EmployeeList from "../EmployeeList/EmployeeList";

import "./EmployeeContainer.css";

const EmployeeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { employees: [] }) => state);
  
  const [showForm, setShowForm] = React.useState(false);
  const [editEmployeeInfo, setEditEmployeeInfo] = React.useState({})

  const handleSubmit = (newEmployee: Partial<EmployeeType>) => {
    if(!newEmployee.id){
      const _id: string = uuidv4()
      dispatch(createEmployee(state, {...newEmployee, id: _id}));
    } else{
      const employees = [...state.employees].forEach((currentEmployee: EmployeeType, i: number) => {
        if(currentEmployee.id === newEmployee.id){
          return currentEmployee = newEmployee
        }        
      })
      dispatch(createEmployee(state, newEmployee));
    }
    
    setShowForm(false);
  };

  const handleEdit = (employee: EmployeeType) => {
    console.log(employee);
    setEditEmployeeInfo(employee)
  }

  // validation function will go here

  return (
    <div className="EmployeeContainer">
      <div className="wrapper-header">
        <h1 className="table-title">All Employees</h1>
        <button className="add-employee-btn" onClick={() => setShowForm(true)}>
          Add Employee
        </button>
      </div>
      {showForm ? <NewEmployeeForm handleSubmit={handleSubmit} editEmployeeInfo={editEmployeeInfo}/> : null}
      <EmployeeList handleEdit={handleEdit} />
    </div>
  );
};

export default EmployeeContainer;
