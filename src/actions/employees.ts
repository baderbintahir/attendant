import { EmployeesArrayType } from "../components/EmployeeContainer/EmployeeContainer";
import {
  GET_EMPLOYEES,
  SET_EMPLOYEE
} from "../constants/actionTypes";

// Action Creators
export const getEmployees = (employees: EmployeesArrayType) => {

  return { type: GET_EMPLOYEES, payload: employees }
}

// ACTIVATED
export const setEmployees = (
  employees: EmployeesArrayType
) =>

  ({ type: SET_EMPLOYEE, payload: employees })
