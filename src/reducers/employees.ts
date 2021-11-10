import { FETCH_ALL_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes'

type Employee = Array<{ _id: string| number }>
type Action = { type: string; payload: any}

const employees = (employees: Employee = [], action: Action) => {
    switch (action.type) {
        case FETCH_ALL_EMPLOYEES:
            return action.payload.employees;
        case CREATE_EMPLOYEE:
            return [...employees, action.payload];
        case UPDATE_EMPLOYEE:
            return employees.map(employee => employee._id === action.payload._id ? action.payload : employee)
        case DELETE_EMPLOYEE:
            return employees.filter(employee => employee._id !== action.payload)
        default:
            return employees;
    }
}

export default employees