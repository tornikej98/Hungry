
import { TfiEmail } from 'react-icons/tfi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useState } from "react";
import { RegisterUser } from "../hooks/Register";
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
            <h1 className="title">Hungry</h1>

            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Register</h1>

                <div className="register-input">
                    <TfiEmail />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                </div>

                <div className="register-input">
                    <RiLockPasswordLine />
                    <input type="password" onChange={(e) => setpassword(e.target.value)} value={password}
                    />
                </div>

                <div className='register-btn'>
                    <button disabled={loading}>Register Account</button>
                    {error && <div className="error">{error}</div>}
                    <Link to='/login'>
                        <button disabled={loading}>Log in</button>
                    </Link>

                </div>

            </form>
        </div>
    )
}

export default Register