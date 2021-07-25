import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/auth.actions";
import Card from "../shared/Card";

const DashboardPage = () => {
  const USER = useSelector((store) => store.rootReducer.userState);
  const EMPLOYEES = useSelector((store) => store.rootReducer.employeeState);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <div className="container">
      <h1 className="text-center">
        Hello, {USER && USER.isLoggedIn ? USER.username : "Annonymous User"}
      </h1>
      <div className="text-center">
        <button className="btn btn-primary my-2" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
      <div className="row">
        {EMPLOYEES.user.map((user) => {
          return <Card user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};

export default DashboardPage;
