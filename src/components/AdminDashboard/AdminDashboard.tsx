import * as React from "react";
import Employees from "../Employees/Employees";
import NavBar from "../NavBar/NavBar";

import "./AdminDashboard.css";
const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  const employeeTypes = ["all", "available", "unavailable", "on leave"];
  const handleChangeTabs = (type: string) => {
    setActiveTab(type);
  };

  return (
    <div className="AdminDashboard">
      <NavBar />
      <div className="tab-btns">
        {employeeTypes.map((type, index) => (
          <button key={index} onClick={() => handleChangeTabs(type)} className={type === activeTab ? "active" : null}>
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
