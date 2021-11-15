import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "../../actions/employees";
import Table from "../Table/Table";

import "./CRUDEmployeeList.css";
import { setData } from "../../api";

export type EmployeeType = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  department?: string;
  role?: string;
  pin?: string;
  availale?: boolean;
  leave?: boolean
};

export type EmployeesArrayType = Array<EmployeeType>;

const CRUDEmployeeList: React.FC = () => {  
  const dispatch = useDispatch();
  const { employees } = useSelector(
    (state: { employees: EmployeesArrayType }) => state
  );

  const handleSubmit = (employee: Partial<EmployeeType>) => {
    if (!employee._id) {
      const updatedEmployees: EmployeesArrayType = [
        ...employees,
        { ...employee, _id: uuidv4() },
      ];
      setData(updatedEmployees);
      dispatch(setEmployees(updatedEmployees));
    } else {
      const updatedEmployees = [...employees];
      let employeeIndex = updatedEmployees.findIndex(
        (emp) => emp._id === employee._id
      );
      updatedEmployees[employeeIndex] = employee;
      setData(updatedEmployees);
      dispatch(setEmployees(updatedEmployees));
    }
  };

  const handleDelete = (employeeIndex: number) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(employeeIndex, 1);
    setData(updatedEmployees);
    dispatch(setEmployees(updatedEmployees));
  };

  // validation function will go here

  return (
    <div className="CRUDEmployeeList">
      <Table
        heading="All Employees"
        handles={{ handleSubmit, handleDelete }}
        employees={employees}
      />
    </div>
  );
};

export default CRUDEmployeeList;
