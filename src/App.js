import Signin from './components/Signin';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Entrenamiento Personal</h2>
      </header>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
