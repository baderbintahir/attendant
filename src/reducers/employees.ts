import { FETCH_ALL_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes'
import { EmployeeType } from "../components/NewEmployeeForm/NewEmployeeForm"

type Action = { type: string; payload: any}

type EmployeeReducer = {
    employees: Array<EmployeeType>;
    isLoading: boolean,
}
const initialState: EmployeeReducer = {
    employees: [],
    isLoading: false,
}

const employeesReducer = (state = initialState, action: Action): any => {
    console.log("reducer:20 => ", action);
    switch (action.type) {
        case FETCH_ALL_EMPLOYEES:
            return action.payload;
        case CREATE_EMPLOYEE:
            return [...state.employees, action.payload];
        case UPDATE_EMPLOYEE:
            return state.employees.map(employee => employee._id === action.payload._id ? action.payload : employee)
        case DELETE_EMPLOYEE:
            return state.employees.filter(employee => employee._id !== action.payload)
        default:
            return state.employees;
    }
}

export default employeesReducer