import { useState } from "react";
import { useAuthCtx } from "./useAuthCtx";

export const RegisterUser = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useAuthCtx()

    const register = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('http://127.0.0.1:5000/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const jsonResponse = await response.json()

        if (!response.ok) {
            setLoading(false)
            setError(jsonResponse.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(jsonResponse))

            dispatch({ type: 'LOGIN', payload: jsonResponse })

            setLoading(false)
        }
    }

    return { register, loading, error }
}