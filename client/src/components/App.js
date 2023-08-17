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
import CategoryList from "./CategoryList";
import HomePage from "./HomePage";
import SearchBar from "./SearchBar";
import ShowListings from "./ShowListings";

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
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <HomePage {...routeProps} currentUser={currentUser} />
          )}
        />
        <AuthenticatedRoute
          exact={true}
          path="/user/listings"
          component={UserListing}
          user={currentUser}
        />
        <AuthenticatedRoute
          exact={true}
          path="/addListing"
          component={CategoryList}
          user={currentUser}
        />
        <AuthenticatedRoute
          exact={true}
          path="/listings/:query"
          component={ShowListings}
          user={currentUser}
        />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
      </Switch>
    </Router>
  );
};

export default hot(App);
