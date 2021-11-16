import * as React from "react";
import { useNavigate } from "react-router-dom";
import Employees from "../Employees/Employees";

import "./AdminDashboard.css";
const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("all");
  const employeeTypes = ["all", "available", "unavailable", "on leave"];
  const handleChangeTabs = (type: string) => {
    setActiveTab(type);
  };

  return (
    <div className="AdminDashboard">
      <div className="dashboard-header">
        <button
          className="crud-btn"
          onClick={() => navigate("/crud_employees")}
        >
          CRUD Employees
        </button>
      </div>
      <div className="tab-btns">
        {employeeTypes.map((type, index) => (
          <button key={index} onClick={() => handleChangeTabs(type)}>
            {type} Employees
          </button>
        ))}
      </div>
      <div className="tabs">
        <Employees type={activeTab} />
      </div>
    </div>
  );
};

export default AdminDashboard;
