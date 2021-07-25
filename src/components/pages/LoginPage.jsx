import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import validate from "../shared/validate";
import { loginAction } from "../../store/actions/auth.actions";
import { LOGINUSER } from "../../constants/loginUsers";

const Username = ({ value, onChange }) => {
  return (
    <div className="form-group m-2">
      <input
        className="form-control"
        type="text"
        placeholder="Username"
        name="username"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const Password = ({ value, onChange }) => {
  return (
    <div className="form-group m-2">
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        name="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate({ username, password });
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      const currentUser = LOGINUSER.users.find(
        (user) => user.username === username && user.password === password
      );
      if (currentUser) {
        const { sessionToken, username } = currentUser;
        dispatch(loginAction({ sessionToken, username,isLoggedIn:true }));
      } else setErrors({ noRecord: "Invalid login credentials!!!" });
    }
  };
  console.log(errors, "errors");
  return (
    <>
      {user && user.isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <div
          className="container-sm row m-auto p-0"
          style={{ maxWidth: "420px" }}
        >
          <div className="row ">
            <div className="col mt-5 text-center">
              <h1 className="text-center mb-3">Login</h1>
              {errors.noRecord && (
                <div class="alert alert-danger" role="alert">
                  {errors.noRecord}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <Username value={username} onChange={setUsername} />
                {errors.username && (
                  <p className="text-danger m-0">{errors.username}</p>
                )}
                <Password value={password} onChange={setPassword} />
                {errors.password && (
                  <p className="text-danger m-0">{errors.password}</p>
                )}
                <button className="btn btn-primary my-2" type="submit">
                  LOGIN
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
