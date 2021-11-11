import {
  FETCH_ALL_EMPLOYEES,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../constants/actionTypes";
import * as api from "../api";
import { EmployeeType } from "../components/NewEmployeeForm/NewEmployeeForm";

// Action Creators
export const setEmployees = (employees: unknown) => {
  
  return { type: FETCH_ALL_EMPLOYEES, payload: employees }
}

// ACTIVATED
export const createEmployee = async (
  newEmployee: Partial<EmployeeType>
) => {
  return { type: CREATE_EMPLOYEE, payload: newEmployee };
};

export const updateEmployee = async (id: any, employee: EmployeeType) => {
  try {
    const { data } = await api.updateEmployee(id, employee);

    return { type: UPDATE_EMPLOYEE, payload: data };
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (id: any) => {
  try {
    await api.deleteEmployee(id);

    return { type: DELETE_EMPLOYEE, payload: id };
  } catch (error) {
    console.log(error);
  }
};