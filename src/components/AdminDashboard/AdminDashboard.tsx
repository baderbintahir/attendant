import * as React from "react";
import EmployeeContainer from "../../containers/EmployeeContainer/EmployeeContainer";
import NavBar from "../NavBar/NavBar";
import { CloseOutlined } from "@ant-design/icons";
import "./AdminDashboard.css";

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  const [search, setSearch] = React.useState("");
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <span className="clear-search" onClick={() => setSearch("")}>
              <CloseOutlined />
            </span>
          )}
        </div>
      </div>
      <div className="tabs">
        <EmployeeContainer type={activeTab} search={search} />
      </div>
    </div>
  );
};

export default AdminDashboard;
