import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { setData } from "../../api";
import { setEmployees } from "../../actions/employees";
import EmployeeList from "../EmployeeList/EmployeeList";
import { EmployeeType } from "../../types/employees";
import { updateEmployees } from "../../shared/utils";
import Notification from "../Notification/Notification";

const CRUDEmployeeList: React.FC = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = React.useState({
    show: false,
    text: "",
  });
  const { employees } = useSelector(
    (state: { employees: Array<EmployeeType> }) => state
  );

  const handleSubmit = (employee: Partial<EmployeeType>) => {
    if (!employee._id) {
      const updatedEmployees: Array<EmployeeType> = [
        ...employees,
        { ...employee, _id: uuidv4() },
      ];
      setData(updatedEmployees).then((status) => {
        if (status === 200) {
          setNotification({show: true, text: "Employee added successfully!!!"});

          dispatch(setEmployees(updatedEmployees));
        }
      });
    } else {
      updateEmployees(employees, employee, dispatch);
      setNotification({show: true, text: "Employee updated successfully!!!"});
    }
  };

  const handleDelete = (employee: EmployeeType) => {
    const updatedEmployees = employees.filter(
      (emp) => emp._id !== employee._id
    );
    setData(updatedEmployees).then((status) => {
      if (status === 200) {
        setNotification({show: true, text: "Employee deleted successfully!!!"});

        dispatch(setEmployees(updatedEmployees));
      }
    });
  };

  return (
    <div className="CRUDEmployeeList">
      <EmployeeList
        heading="All Employees"
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        employees={employees}
      />
      <Notification notification={notification} setNotification={setNotification} />
    </div>
  );
};

export default CRUDEmployeeList;
