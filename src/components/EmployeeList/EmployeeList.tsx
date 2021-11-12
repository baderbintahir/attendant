import * as React from "react";
import { useSelector } from "react-redux";
import { EmployeeType } from "../EmployeeContainer/EmployeeContainer";
import "./EmployeeList.css";

type Prop = {
    handleEdit: (employee: Partial<EmployeeType>) => void;
};

const Table = (props: Prop) => {
  const { employees } = useSelector((state: { employees: [] }) => state);
  console.log("EmployeList:12", employees);

  return (
    <div className="EmployeeList">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee: EmployeeType, index: number) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              <td>
                <button onClick={() => props.handleEdit(employee)}>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
