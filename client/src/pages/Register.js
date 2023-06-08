import { useState } from "react";
import { RegisterUser } from "../hooks/Register";


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
            <h1>this is register page</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <h1>Register</h1>

                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}
                />

                <label>Password:</label>
                <input type="password" onChange={(e) => setpassword(e.target.value)} value={password}
                />

                <button disabled={loading}>Register Account</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Register