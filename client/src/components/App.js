import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";
import { Link } from "react-router-dom";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import UserListing from "./UserListing";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch (err) {
      setCurrentUser(null)
    }
  }

  useEffect(() => {
    fetchCurrentUser()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/">
          <div className="user-name">
            {currentUser && <h1>Hi {currentUser.firstName} !!</h1>}
            </div>
            <div className="welcome-page">
            <h5 >Welcome to MarketMingle App – Your Destination for Discovery and Deals! Browse, buy, and sell a wide range of products and services. Start exploring, connecting, and discovering today!</h5>
          </div>
        </Route>
        <AuthenticatedRoute
          exact={true}
          path="/user/listings"
          component={UserListing}
          user={currentUser}
        />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
