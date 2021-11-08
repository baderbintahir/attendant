import { FETCH_ALL_EMPLOYEES, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes.js'
import * as api from '../api'

// Action Creators
export const getEmployees = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
        const { data } = await api.fetchEmployees()

        dispatch({type: FETCH_ALL_EMPLOYEES, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createEmployee = (employee: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
        const { data } = await api.createEmployee(employee)
        
        dispatch({type: CREATE_EMPLOYEE, payload: data.result})
    } catch (error) {
        console.log(error)
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