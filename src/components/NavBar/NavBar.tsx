import * as React from "react";
import { useNavigate } from "react-router-dom";

import "./NavBar.css"

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="NavBar">
      <span className="logo">Attendant</span>
      <button className="crud-btn" onClick={() => navigate("/crud_employees")}>
        CRUD Employees
      </button>
    </div>
  );
};

export default NavBar;
