import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import Login from './components/Login';
// import Logout from './components/Logout';
import './App.css';
// import { fetchLikedRecipes } from './utils/ApiService';
import LikedRecipes from './pages/LikedRecipes';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthCtxProvider } from './context/Auth';
import { RecipeCtxProvider } from './context/RecipeContext';

import { useAuthCtx } from './hooks/useAuthCtx';
import MainPage from './pages/MainPage';



function App() {
  const { user } = useAuthCtx()
  console.log(user)

  return (
    // <AuthCtxProvider>
    //   <RecipeCtxProvider>
    <div className="App">
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path='/'
              element={user ? <MainPage /> : <Navigate to='/login' />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/register'
              element={<Register />}
            />
            <Route
              path='/logout'
              element={<Login />}
            />

            <Route
              path='/likedRecipes'
              element={user ? <LikedRecipes /> : <Navigate to='/login' />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
    //   </RecipeCtxProvider>
    // </AuthCtxProvider>
  );
}

export default App;
