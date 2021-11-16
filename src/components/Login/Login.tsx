import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../actions/employees'
import { EmployeesArrayType } from '../CRUDEmployeeList/CRUDEmployeeList'
import './Login.css'

const initialState = { email: '', pin: '' }

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { employees, auth } = useSelector(
        (state: { employees: EmployeesArrayType, auth: {} }) => state
      );
    const [formData, setFormData] = React.useState(initialState)

    const handleSubmit = () => {
        const oldUser = employees.find(employee => employee.email === formData.email)
        if (!oldUser) return alert("User doesn't exist!!!")
        const isPinCorrect = oldUser.pin === formData.pin
        if (!isPinCorrect) return alert("Incorrect PIN!!!")
        dispatch(login(oldUser))
        if(oldUser.role === "admin")
            navigate("/admin_dashboard")
        else
        navigate("/punch_card")
    }

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-form" >
            <div className="login-box">
                <div className="dim-bg"></div>
                <h2>Attendant</h2>
                <input className="input-field" type="text" name="email" id="email" placeholder="Email" onChange={handleChange} />
                <input className="input-field" type="password" name="pin" id="pin" placeholder="PIN" onChange={handleChange} />                
                    
                <button className="submit-btn" type="submit" onClick={handleSubmit}>Log In</button>
            </div>
        </div>
    )
}

export default Login