import { EmployeesArrayType } from '../components/CRUDEmployeeList/CRUDEmployeeList'
import { GET_EMPLOYEES, SET_EMPLOYEE } from '../constants/actionTypes'

type Action = { type: string; payload: EmployeesArrayType}

type EmployeeReducer = {
    employees: EmployeesArrayType;
    isLoading: boolean,
}
const initialState: EmployeeReducer = {
    employees: [],
    isLoading: false,
}

const employeesReducer = (state = initialState, action: Action): EmployeesArrayType => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return action.payload;
        case SET_EMPLOYEE:
            return action.payload;
        default:
            return state.employees;
    }
}

export default employeesReducer