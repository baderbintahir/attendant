import * as React from "react";
import { useSelector } from "react-redux";
import { EmployeeType } from "../CRUDEmployeeList/CRUDEmployeeList";
import Table from "../Table/Table";
import "./Employees.css";

type Prop = {
  type: string;
};

const Employees: React.FC<Prop> = (props) => {
  const { employees } = useSelector(
    (state: { employees: Array<EmployeeType> }) => state
  );
  let data: Array<EmployeeType> = [];
  let heading: string = "";
  
  switch (props.type) {
    case "all":
      data = employees;
      heading = "All Employees";
      break;
    case "available":
      data = employees.filter((employee) => employee.available);
      heading = "Available Employees";
      break;
    case "unavailable":
      data = employees.filter((employee) => !employee.available);
      heading = "Unavailable Employees";
      break;
    case "on leave":
      data = employees.filter((employee) => employee.leave);
      heading = "Employees On Leave";
      break;
    default:
      break;
  }

  return (
    <div className="Employees">
      <Table heading={heading} handles={null} employees={data} />
    </div>
  );
};

export default Employees;
