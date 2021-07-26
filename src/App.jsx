import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import NotFoundPage from "./components/pages/NotFoundPage";

import { loginAction } from "./store/actions/auth.actions";
import { setEmployeesAction } from "./store/actions/employee.actions";

import { EMPLOYEES } from "./constants/employees";
import { LOGINUSER } from "./constants/loginUsers";

export function Protected(props) {
  const user = useSelector((store) => store.rootReducer.userState);
  return (
    <>{user && user.isLoggedIn ? props.children : <Redirect to="/login" />}</>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    
    if (user && user.isLoggedIn) {
      const currentUser = LOGINUSER.users.filter(
        (data) => data.sessionToken === user.sessionToken
      );

      const { sessionToken, username } = currentUser[0];
      dispatch(
        loginAction({ sessionToken, username, isLoggedIn: user.isLoggedIn })
      );
    }
    dispatch(setEmployeesAction(EMPLOYEES));
  }, []);

  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Protected>
              <DashboardPage />
            </Protected>
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
