import * as React from "react";
import { EmployeeType } from "../CRUDEmployeeList/CRUDEmployeeList";
import "./NewEmployeeForm.css";

type Prop = {
  handleSubmit: (employee: Partial<EmployeeType>) => void;
  editEmployeeInfo: {};
};

const NewEmployeeForm = (props: Prop) => {
  const [employee, setEmployee] = React.useState<Partial<EmployeeType>>(
    props.editEmployeeInfo
  );

  React.useEffect(() => {
    setEmployee(props.editEmployeeInfo);
  }, [props.editEmployeeInfo]);

  return (
    <div className="NewEmployeeForm add-employee-wrapper">
      <h1>Add Employee</h1>
      <input
        id="firstName-field"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={employee.firstName || ""}
        onChange={(e) =>
          setEmployee({ ...employee, firstName: e.target.value })
        }
      />
      <input
        id="lastName-field"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={employee.lastName || ""}
        onChange={(e) => setEmployee({ ...employee, lastName: e.target.value })}
      />
      <input
        id="email-field"
        type="email"
        name="email"
        placeholder="email"
        value={employee.email || ""}
        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
      />
      <input
        id="pin-field"
        type="number"
        name="pin"
        placeholder="PIN"
        value={employee.pin || ""}
        onChange={(e) =>
          setEmployee({ ...employee, pin: e.target.value.slice(0, 4) })
        }
      />
      <select
        className="dept-dropdown"
        value={employee.department || ""}
        onChange={(e) =>
          setEmployee({ ...employee, department: e.target.value })
        }
      >
        <option value="">Departments</option>
        <option value="REM">REM</option>
        <option value="MEM">MEM</option>
        <option value="EME">EME</option>
        <option value="FAM">FAM</option>
        <option value="ACT">ACT</option>
      </select>
      <input
        id="role-field"
        type="text"
        name="role"
        placeholder="role"
        value={employee.role || ""}
        onChange={(e) => setEmployee({ ...employee, role: e.target.value })}
      />
      <button
        className="add-employee-submit-btn"
        onClick={() => {
          props.handleSubmit(employee);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default NewEmployeeForm;
