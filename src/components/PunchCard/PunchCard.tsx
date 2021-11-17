import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  EmployeeType,
  updateEmployees,
} from "../CRUDEmployeeList/CRUDEmployeeList";
import "./PunchCard.css";

const PunchCard: React.FC = () => {
  const dispatch = useDispatch();
  const loggedUser = JSON.parse(localStorage.getItem("profile"));
  const [punchIn, setPunchIn] = React.useState(false);
  const [appliedLeave, setAppliedLeave] = React.useState(loggedUser.leave);
  const { employees } = useSelector(
    (state: { employees: Array<EmployeeType> }) => state
  );

  const handlePunch = () => {
    setPunchIn(!punchIn);
    loggedUser.available = punchIn;
    updateEmployees(employees, loggedUser, dispatch);
  };

  const handleLeave = () => {
    setAppliedLeave(true);
    loggedUser.available = appliedLeave;
    loggedUser.leave = !appliedLeave;
    updateEmployees(employees, loggedUser, dispatch);
  };

  return (
    <div className="PunchCard-wrapper">
      <div className="punch-card">
        <h1>Punch Card</h1>
        <button
          className="in-out-btn"
          onClick={handlePunch}
          disabled={appliedLeave}
        >
          Punch {!punchIn ? "In" : "Out"}
        </button>
        <button
          className="leave-btn"
          onClick={handleLeave}
          disabled={appliedLeave}
        >
          Apply Leave
        </button>
      </div>
    </div>
  );
};

export default PunchCard;
