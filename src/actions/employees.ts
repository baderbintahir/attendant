import { EmployeesArrayType } from "../components/CRUDEmployeeList/CRUDEmployeeList";
import { GET_EMPLOYEES, SET_EMPLOYEE } from "../constants/actionTypes";

// Action Creators
export const getEmployees = (employees: EmployeesArrayType) => ({
  type: GET_EMPLOYEES,
  payload: employees,
});

// ACTIVATED
export const setEmployees = (employees: EmployeesArrayType) => ({
  type: SET_EMPLOYEE,
  payload: employees,
});
