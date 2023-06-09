
import { TfiEmail } from 'react-icons/tfi'
import { RiLockPasswordLine } from 'react-icons/ri'

import { useState } from "react";
import { LoginUser } from "../hooks/Login";
import { useAuthCtx } from '../hooks/useAuthCtx';

import('./login.css')




const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const { login, error, loading } = LoginUser()

    // const user = useAuthCtx()
    // console.log(user)

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
                    <TfiEmail />
                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                </div>

                <div className='input-field'>
                    <RiLockPasswordLine />
                    <input type="password" onChange={(e) => setpassword(e.target.value)} value={password}
                    />
                </div>


                <div className='btn'>
                    <button disabled={loading}>Log in</button>
                </div>

                {error && <div className="error">{error}</div>}
            </form>
        </div>


    )
}

export default Login