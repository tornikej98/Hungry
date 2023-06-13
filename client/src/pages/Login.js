
import { TfiEmail } from 'react-icons/tfi'
import { RiLockPasswordLine } from 'react-icons/ri'

import { useState } from "react";
import { LoginUser } from "../hooks/Login";
import { IconContext } from "react-icons";
import { useAuthCtx } from '../hooks/useAuthCtx';
import { Link } from 'react-router-dom';

import('./login.css')




const Login = () => {



    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const { login, error, loading } = LoginUser()


    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)

    }

    return (

        <div className="login-page">
            <h4>this is the login page</h4>
            <h1 className="title">Hungry</h1>

            <form className="login" onSubmit={handleSubmit}>


                <div className='input-field'>
                    <IconContext.Provider value={{ color: 'white' }}>
                        <TfiEmail className='login-icon' />
                    </IconContext.Provider>
                    <input
                        type="email"
                        placeholder='Email...'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className='input-field'>
                    <IconContext.Provider value={{ color: 'white' }}>
                        <RiLockPasswordLine className='login-icon' />
                    </IconContext.Provider>
                    <input
                        type="password"
                        placeholder='Password...'
                        onChange={(e) => setpassword(e.target.value)}
                        value={password}
                    />
                </div>


                <div className='log-btn'>

                    <button disabled={loading}>Log in</button>

                </div>
                <div className='reg-btn'>
                    <Link to='/register'>
                        <button disabled={loading}>Register</button>
                    </Link>
                </div>

                {error && <div className="error">{error}</div>}
            </form>
        </div>


    )
}

export default Login