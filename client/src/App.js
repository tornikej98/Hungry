import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import LikedRecipes from './pages/LikedRecipes';
import Login from './pages/Login';
import Register from './pages/Register';

import { useAuthCtx } from './hooks/useAuthCtx';
import MainPage from './pages/MainPage';
import RecipePage from './pages/RecipePage';



function App() {
  const { user } = useAuthCtx()


  return (

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
              element={!user ? <Login /> : <Navigate to='/' />}
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
              exact
              path='/likedRecipes/'
              element={user ? <LikedRecipes /> : <Navigate to='/login' />}
            />

            <Route
              exact
              path="/recipePage/:id"
              element={user ? <RecipePage /> : <Navigate to='/login' />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
