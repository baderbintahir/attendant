import { EmployeesArrayType, EmployeeType } from "../components/CRUDEmployeeList/CRUDEmployeeList";
import { GET_EMPLOYEES, SET_EMPLOYEE, LOGIN } from "../constants/actionTypes";

// Action Creators
export const getEmployees = (employees: EmployeesArrayType) => ({
  type: GET_EMPLOYEES,
  payload: employees,
});

export const setEmployees = (employees: EmployeesArrayType) => ({
  type: SET_EMPLOYEE,
  payload: employees,
});

export const login = (employee: EmployeeType) => ({
  type: LOGIN,
  payload: employee,
});