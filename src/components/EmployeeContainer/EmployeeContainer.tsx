import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "../../actions/employees";
import NewEmployeeForm from "../NewEmployeeForm/NewEmployeeForm";
import EmployeeList from "../EmployeeList/EmployeeList";

import "./EmployeeContainer.css";
import { setData } from "../../api";

export type EmployeeType = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  department?: string;
  role?: string;
  pin?: string;
}

export type EmployeesArrayType = Array<EmployeeType>


const EmployeeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector((state: { employees: EmployeesArrayType }) => state);

  const [showForm, setShowForm] = React.useState(false);
  const [editEmployeeInfo, setEditEmployeeInfo] = React.useState({});

  const handleSubmit = (employee: Partial<EmployeeType>) => {
    if (!employee._id) {
      const updatedEmployees: EmployeesArrayType = [...employees, { ...employee, _id: uuidv4() }]
      setData(updatedEmployees)
      dispatch(setEmployees(updatedEmployees));
    } else {
      const updatedEmployees = [...employees];
      let employeeIndex = updatedEmployees.findIndex(
        (emp) => emp._id === employee._id
      );
      updatedEmployees[employeeIndex] = employee
      setData(updatedEmployees)
      dispatch(setEmployees(updatedEmployees))
    }

    setShowForm(false);
  };

  const handleEdit = (employee: EmployeeType) => {
    setShowForm(true);
    setEditEmployeeInfo(employee);
  };

  const handleDelete = (employeeIndex: number) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(employeeIndex, 1)
    setData(updatedEmployees)
    dispatch(setEmployees(updatedEmployees))
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
      {showForm ? (
        <NewEmployeeForm
          handleSubmit={handleSubmit}
          editEmployeeInfo={editEmployeeInfo}
        />
      ) : null}
      <EmployeeList handleEdit={handleEdit} handleDelete={handleDelete} />
    </div>
  );
};

export default EmployeeContainer;
