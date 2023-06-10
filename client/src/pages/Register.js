
import { TfiEmail } from 'react-icons/tfi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useState } from "react";
import { RegisterUser } from "../hooks/Register";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import('./register.css')

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const { register, error, loading } = RegisterUser()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await register(email, password)
    }

    return (

        <div className="register-page">
            <h4>this is register page</h4>
            <h1 className="reg-title">Hungry</h1>

            <form className="register-form" onSubmit={handleSubmit}>
                <div className="reg-input-field">
                    <IconContext.Provider value={{ color: '#ef4a75' }}>
                        <TfiEmail className='login-icon' />
                    </IconContext.Provider>
                    <input
                        type="email"
                        placeholder='New Email...'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="reg-input-field">
                    <IconContext.Provider value={{ color: '#ef4a75' }}>
                        <RiLockPasswordLine className='login-icon' />
                    </IconContext.Provider>
                    <input
                        type="password"
                        placeholder='New Password...'
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className='reg-create-btn'>
                    <button disabled={loading}>Create Account</button>

                </div>

                <div className='reg-log-btn'>
                    <Link to='/login'>
                        <button disabled={loading}>Log in</button>
                    </Link>
                </div>

                {error && <div className="error">{error}</div>}

            </form>
        </div>
    )
}

export default Register