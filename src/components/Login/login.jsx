import React from "react";








const Login = (props) => {
  return (
    <React.Fragment>
      <div className="row row-spacer">
        <h1>PKCJJ Card Shop Login</h1>
      </div>

      <div className="left">
        <h2>{props.currentCollection}</h2>
      </div>
      <form className="col-md-2">
        
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
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
