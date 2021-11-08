import * as React from "react";
import { useState } from "react";
import "./Table.css";

const Table = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="Table">
      <div className="table-wrapper">
        <h1 className="table-title">All Employees</h1>
        <button className="add-employee-btn" onClick={() => setShowForm(true)}>Add Employee</button>
      </div>

      <div className={`${showForm ? "display" : null} add-employee-wrapper`}>
        <h1>Add Employee</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="department" />
        <input type="text" placeholder="role" />
        <button className="add-employee-submit-btn" onClick={() => setShowForm(false)}>Save</button>
      </div>
    </div>
  );
};

export default Table;
