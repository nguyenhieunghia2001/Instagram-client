import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Components/common/Layouts";
import HomePage from "../Pages/Home/HomePage";
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

        <Route path="/" exact>
          <Layout>
            <HomePage />
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
