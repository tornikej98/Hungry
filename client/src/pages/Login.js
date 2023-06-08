import { useState } from "react";
import { LoginUser } from "../hooks/Login";
import { useAuthCtx } from '../hooks/useAuthCtx';



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
            <h1>this is login page</h1>
            <form className="login" onSubmit={handleSubmit}>
                <h1>Log-in</h1>

                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                />

                <label>Password:</label>
                <input type="password" onChange={(e) => setpassword(e.target.value)} value={password}
                />

                <button disabled={loading}>Log in</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>


    )
}

export default Login