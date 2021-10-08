import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import Auth from './Components/Auth/Auth';

export const userContext = createContext();

function App() {
  const user = {
    userName : "monir",
    password : "123",
    isAuthenticated : false
  }

  return (
    <userContext.Provider value={user}>
        <div className="App">
          <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login></Login>
                </Route>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/auth">
                    <Auth></Auth>
                </Route>
            </Switch>
          </BrowserRouter>
        </div>
    </userContext.Provider>
  );
}

export default App;
