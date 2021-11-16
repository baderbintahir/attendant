import { EmployeesArrayType } from '../components/CRUDEmployeeList/CRUDEmployeeList'
import { GET_EMPLOYEES, SET_EMPLOYEE, LOGIN } from '../constants/actionTypes'

type Action = { type: string; payload: EmployeesArrayType}

type EmployeeReducer = {
    employees: EmployeesArrayType;
    auth: {};
    isLoading: boolean,
}
const initialState: EmployeeReducer = {
    employees: [],
    auth: {},
    isLoading: false,
}

const reducer = (state = initialState, action: Action): EmployeeReducer => {
    
    switch (action.type) {
        case GET_EMPLOYEES:
            return {...state, employees: action.payload};
        case SET_EMPLOYEE:
            return {...state, employees: action.payload};
        case LOGIN:
            localStorage.setItem('profile', JSON.stringify(action.payload));
            return {...state, auth: action.payload};
        default:
            return state;
    }
}

export default reducer