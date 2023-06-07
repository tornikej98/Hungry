import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>topBar</h1>
      <h1>mainPart</h1>
      <h1>Auth0 login</h1>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
