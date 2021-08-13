import React from "react";
import useForm from "../UseForm/useForm";



const Login = (props) => { 
  const{values, handleChange, handleSubmit} = useForm(loginUser);
  function loginUser() {
    props.getUser(values);
    console.log(values);
  }
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="col-md-2">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            name="userName"
            type="User Name"
            className="form-control"
            id="floatingInput"
            placeholder="John123456"
            onChange={handleChange}
            values = {values.userName}
          />
          <label for="floatingInput">User Name</label>
        </div>
        <div className="form-floating">
          <input
            name="password"
            type="Password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChange}
            values={values.password}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="w-10 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2021</p>
      </form>
    </React.Fragment>
  );
};

export default Login;
