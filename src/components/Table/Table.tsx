import * as React from "react";
import { EmployeesArrayType, EmployeeType } from "../CRUDEmployeeList/CRUDEmployeeList";
import NewEmployeeForm from "../NewEmployeeForm/NewEmployeeForm";
import "./Table.css";

type Prop = {
  heading: string;
  handles: {
    handleSubmit?: (employee: EmployeeType) => void;
    handleDelete?: (employeeIndex: number) => void;
  };
  employees: EmployeesArrayType;
};

const Table = (props: Prop) => {
  const [showForm, setShowForm] = React.useState(false);
  const [editEmployeeInfo, setEditEmployeeInfo] = React.useState({});

  return (
    <div className="Table">
      <div className="wrapper-header">
        <h1 className="table-title">{props.heading}</h1>
        {props.handles ? (
          <button
            className="add-employee-btn"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add Employee
          </button>
        ) : null}
      </div>
      {showForm ? (
        <NewEmployeeForm
          handleSubmit={(employee) => {
            setShowForm(false);
            props.handles.handleSubmit(employee);
          }}
          editEmployeeInfo={editEmployeeInfo}
        />
      ) : null}

      <table className="EmployeeList">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>PIN</th>
            <th>Department</th>
            <th>Role</th>
            {props.handles ? <th>Actions</th> : null}
          </tr>
        </thead>

        <tbody>
          {props.employees.map((employee: EmployeeType, index: number) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.pin}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              {props.handles ? (
                <td>
                  <button
                    onClick={() => {
                      setShowForm(true)
                      setEditEmployeeInfo(employee);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => props.handles.handleDelete(index)}>
                    Delete
                  </button>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
