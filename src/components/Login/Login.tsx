import * as React from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'

// import { login } from '../../actions/auth'

const initialState = { username: '', password: '' }

const Login = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = React.useState(initialState)

    const handleSubmit = (e:any) => {
        e.preventDefault()
        
        console.log(e, formData);
        
        // dispatch(login(formData, history))
    }

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="login-form" >
            <div className="login-box">
                <div className="dim-bg"></div>
                <h2>Attendant</h2>
                <input className="input-field" type="text" name="username" id="username" placeholder="Username" onChange={handleChange} />
                <input className="input-field" type="password" name="password" id="password" placeholder="Password" onChange={handleChange} />                
                    
                <button className="submit-btn" type="submit" onClick={handleSubmit}>Log In</button>
            </div>
        </div>
    )
}

export default Login