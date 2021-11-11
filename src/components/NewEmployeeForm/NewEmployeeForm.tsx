import * as React from "react";
import "./NewEmployeeForm.css";

export type EmployeeType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  role: string;
  pin: string;
}

type Prop = {
  handleSubmit: (employee: Partial<EmployeeType>) => void;
  editEmployeeInfo: {}
};

const NewEmployeeForm = (props: Prop) => {
  const [newEmployee, setNewEmployee] = React.useState<Partial<EmployeeType>>(
    props.editEmployeeInfo
  );

  return (
    <div className="NewEmployeeForm add-employee-wrapper">
      <h1>Add Employee</h1>
      <input
        id="firstName-field"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={newEmployee.firstName || ""}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, firstName: e.target.value })
        }
      />
      <input
        id="lastName-field"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={newEmployee.lastName || ""}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, lastName: e.target.value })
        }
      />
      <input
        id="email-field"
        type="email"
        name="email"
        placeholder="email"
        value={newEmployee.email || ""}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, email: e.target.value })
        }
      />
      <input
        id="pin-field"
        type="number"
        name="pin"
        placeholder="PIN"
        value={newEmployee.pin || ""}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, pin: e.target.value.slice(0, 4) })
        }
      />
      <select
        className="dept-dropdown"
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, department: e.target.value })
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
        value={newEmployee.role || ""}
        onChange={(e) =>
          setNewEmployee({ ...newEmployee, role: e.target.value })
        }
      />
      <button
        className="add-employee-submit-btn"
        onClick={() => {
          props.handleSubmit(newEmployee);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default NewEmployeeForm;
