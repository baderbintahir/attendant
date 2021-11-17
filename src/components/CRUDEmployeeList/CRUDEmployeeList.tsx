import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setData } from "../../api";
import { setEmployees } from "../../actions/employees";
import Table from "../Table/Table";
import "./CRUDEmployeeList.css";

export type EmployeeType = {
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  department?: string;
  role?: string;
  pin?: string;
  available?: boolean;
  leave?: boolean;
};

export const updateEmployees = (
  employees: Array<EmployeeType>,
  updatedEmployee: EmployeeType,
  dispatch: any
) => {
  const updatedEmployees = [...employees];
  const employeeIndex = updatedEmployees.findIndex(
    (emp) => emp._id === updatedEmployee._id
  );
  updatedEmployees[employeeIndex] = updatedEmployee;
  setData(updatedEmployees);
  dispatch(setEmployees(updatedEmployees));
};

const CRUDEmployeeList: React.FC = () => {
  const dispatch = useDispatch();
  const { employees } = useSelector(
    (state: { employees: Array<EmployeeType> }) => state
  );

  const handleSubmit = (employee: Partial<EmployeeType>) => {
    if (!employee._id) {
      const updatedEmployees: Array<EmployeeType> = [
        ...employees,
        { ...employee, _id: uuidv4() },
      ];
      setData(updatedEmployees);
      dispatch(setEmployees(updatedEmployees));
    } else {
      updateEmployees(employees, employee, dispatch);
    }
  };

  const handleDelete = (employeeIndex: number) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(employeeIndex, 1);
    setData(updatedEmployees);
    dispatch(setEmployees(updatedEmployees));
  };

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
