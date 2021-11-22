import * as React from "react";
import { EmployeeType } from "../../types/employees";
import NewEmployeeForm from "../NewEmployeeForm/NewEmployeeForm";
import { Pagination } from "antd";
import "./EmployeeList.css";
import { useNavigate } from "react-router";

type Prop = {
  heading: string;
  handleSubmit?: (employee: EmployeeType) => void;
  handleDelete?: (employee: EmployeeType) => void;
  employees: Array<EmployeeType>;
};

const EmployeeList = (props: Prop) => {
  const navigate = useNavigate()
  const [showForm, setShowForm] = React.useState(false);
  const [employee, setEmployee] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentList, setCurrentList] = React.useState(
    props.employees.slice(0, 10)
  );

  React.useEffect(() => {
    setCurrentList(
      props.employees.slice((currentPage - 1) * 10, currentPage * 10)
    );
  }, [currentPage, props.employees]);
  

  return (
    <div className="Table">
      <div className="wrapper-header">
        <h1 className="table-title">{props.heading}</h1>
        {props.handleSubmit ? (
          <button
            className="add-employee-btn"
            onClick={() => {
              setShowForm(true);
            }}
          >
            Add Employee
          </button>
        ) : (
          <button
            className="add-employee-btn"
            onClick={() => {
              navigate("/crud_employees");
            }}
          >
            Update Employees
          </button>
        )}
      </div>
      {showForm && (
        <NewEmployeeForm
          handleSubmit={(employee) => {
            setShowForm(false);
            props.handleSubmit(employee);
          }}
          employee={employee}
          setShowForm={setShowForm}
        />
      )}

      <table className="EmployeeList">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>PIN</th>
            <th>Department</th>
            <th>Role</th>
            {props.handleSubmit && <th className="actions-title">Actions</th>}
          </tr>
        </thead>

        <tbody>
          {currentList.map((employee: EmployeeType, index: number) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.pin}</td>
              <td>{employee.department}</td>
              <td>{employee.role}</td>
              {props.handleSubmit && (
                <td className="action-btns">
                  <button
                    onClick={() => {
                      setShowForm(true);
                      setEmployee(employee);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => props.handleDelete(employee)}>
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        defaultCurrent={1}
        total={props.employees.length}
        onChange={(page) => setCurrentPage(page)}
        hideOnSinglePage
        responsive
        showLessItems
        showSizeChanger={false}
      />
    </div>
  );
};

export default EmployeeList;
