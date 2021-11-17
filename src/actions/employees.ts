import {
  EmployeeType,
} from "../components/CRUDEmployeeList/CRUDEmployeeList";
import { GET_EMPLOYEES, SET_EMPLOYEE, LOGIN } from "../constants/actionTypes";

// Action Creators
export const getEmployees = (employees: Array<EmployeeType>) => ({
  type: GET_EMPLOYEES,
  payload: employees,
});

export const setEmployees = (employees: Array<EmployeeType>) => ({
  type: SET_EMPLOYEE,
  payload: employees,
});

export const login = (employee: EmployeeType) => ({
  type: LOGIN,
  payload: employee,
});
