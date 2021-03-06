import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../Components/common/Layouts";
import AccountPage from "../Pages/Account/AccountPage";
import HomePage from "../Pages/Home/HomePage";
import LoginPage from "../Pages/Login/LoginPage";
import PostPage from "../Pages/Post/PostPage";
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
        <Route>
          <Layout>
            <Switch>
              <Route path="/post/:id" exact>
                <PostPage />
              </Route>
              <Route
                path="/account"
                render={({ match: { path } }) => (
                  <Switch>
                    <Route path={`${path}/edit`} exact>
                      <PostPage />
                    </Route>
                    <Route path={`${path}/:nickname`} exact>
                      <AccountPage />
                    </Route>
                  </Switch>
                )}
              />

              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
