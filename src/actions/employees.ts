import { FETCH_ALL_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes'
import * as api from '../api'
import { EmployeeType } from '../components/NewEmployeeForm/NewEmployeeForm'

// Action Creators
export const getEmployees = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {        
        const data = await api.getData()        

        dispatch({type: FETCH_ALL_EMPLOYEES, payload: data})
    } catch (error) {
        console.log(error)
    }
}

// ACTIVATED
export const createEmployee = (state: {employees: []}, newEmployee: Partial<EmployeeType>) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
        console.log([state]);
        
        const status = await api.setData({...state, employees: [...state.employees, newEmployee]})
        
        if(status === 200){
            dispatch({type: CREATE_EMPLOYEE, payload: newEmployee})
        }

    } catch (error) {
        console.log('error => ', error)
        return error
    }
}

export const updateEmployee = (id: any, employee: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
        const { data } = await api.updateEmployee(id, employee)
        
        dispatch({type: UPDATE_EMPLOYEE, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const deleteEmployee = (id: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
        await api.deleteEmployee(id)
        
        dispatch({type: DELETE_EMPLOYEE, payload: id})
    } catch (error) {
        console.log(error)
    }
}