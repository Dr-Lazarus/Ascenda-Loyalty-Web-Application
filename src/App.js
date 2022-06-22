import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar"; 
import LoginForm from "./components/Login/LoginForm";
import Register from "./components/Register/Register";
import "./App.css"
// import "./index.css"
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/login">
          <LoginForm className="login-component"/>
        </Route>

        <Route path="/register">
          <Register className="register-component"/>
        </Route>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);
