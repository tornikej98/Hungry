import { useState } from 'react';
import { useAuthCtx } from './useAuthCtx';

export const LoginUser = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const { dispatch } = useAuthCtx();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    console.log(process.env.REACT_APP_DB_LINK);
    const response = await fetch(
      process.env.REACT_APP_DB_LINK + '/user/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      }
    );

    const jsonResponse = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(jsonResponse.error);
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(jsonResponse));
      dispatch({ type: 'LOGIN', payload: jsonResponse });
      setLoading(false);
    }
  };

  return { login, loading, error };
};
