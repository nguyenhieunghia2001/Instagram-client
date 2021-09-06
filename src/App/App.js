import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Register/RegisterPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
