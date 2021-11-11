import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { createEmployee } from "../../actions/employees";
import NewEmployeeForm, {
  EmployeeType,
} from "../NewEmployeeForm/NewEmployeeForm";
import EmployeeList from "../EmployeeList/EmployeeList";

import "./EmployeeContainer.css";
import { setData } from "../../api";

const EmployeeContainer: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: { employees: Array<EmployeeType> }) => state);

  const [showForm, setShowForm] = React.useState(false);
  const [editEmployeeInfo, setEditEmployeeInfo] = React.useState({});

  const handleSubmit = (employee: Partial<EmployeeType>) => {
    if (!employee._id) {
      const id: string = uuidv4();
      setData([...state.employees, { ...employee, _id: id }])
      dispatch(createEmployee({...employee, _id: id}));
    } else {
      const updatedEmployees = [...state.employees];
      // let employeeIndex = updatedEmployees.find(
      //   (emp) => emp._id === employee._id
      // );

      console.log("29 => ", updatedEmployees, employee);

      // dispatch(createEmployee(state, newEmployee));
    }

    setShowForm(false);
  };

  const handleEdit = (employee: EmployeeType) => {
    // console.log(employee);
    setShowForm(true);
    setEditEmployeeInfo(employee);
  };

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
      <EmployeeList handleEdit={handleEdit} />
    </div>
  );
};

export default EmployeeContainer;
