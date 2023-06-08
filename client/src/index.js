import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthCtxProvider } from './context/Auth';
import { RecipeCtxProvider } from './context/RecipeContext';
// import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <AuthCtxProvider>
      <RecipeCtxProvider>
        <App />
      </RecipeCtxProvider>
    </AuthCtxProvider>




  </React.StrictMode>
);

// If you sant to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
