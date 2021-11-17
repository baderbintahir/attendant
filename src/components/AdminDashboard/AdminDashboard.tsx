import * as React from "react";
import Employees from "../Employees/Employees";
import NavBar from "../NavBar/NavBar";
import "./AdminDashboard.css";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  const employeeTypes = ["all", "available", "unavailable", "on leave"];

  return (
    <div className="AdminDashboard">
      <NavBar />
      <div className="tabs-header">
        <div className="tab-btns">
          {employeeTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(type)}
              className={type === activeTab ? "active" : null}
            >
              {type} Employees
            </button>
          ))}
        </div>

        <div className="search-wrapper">
          <input
            type="text"
            name="search-field"
            id="search-field"
            placeholder="Search"
          />
          <button className="search-btn"><i className="fa fa-search"></i></button>
        </div>
      </div>
      <div className="tabs">
        <Employees type={activeTab} />
      </div>
    </div>
  );
};

export default AdminDashboard;
