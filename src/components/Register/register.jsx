import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../UseForm/useForm";

const Register = (props) => {
  const { values, handleChange, handleSubmit } = useForm(create);
  function create() {
    props.newUser(values);
    console.log(values);
  }

  return (
    <div>
      <div>
        <div className="row row-spacer">
          <h1>PKCJJ Card Shop Register</h1>
        </div>

        <form className="col-md-2" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>

          <div className="form-floating">
            <input
              name="firstName"
              type="string"
              className="form-control"
              placeholder="John"
              required
              onChange={handleChange}
              values={values.firstName}
            />
            {console.log(values.firstName)}
            <label for="floatingInput">First Name </label>
          </div>
          <div className="form-floating">
            <input
              name="lastName"
              type="string"
              className="form-control"
              placeholder="Doe"
              onChange={handleChange}
              values={values.lastName}
            />
            {console.log(values.lastName)}
            <label for="floatingPassword">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              name="userName"
              type="string"
              className="form-control"
              placeholder="John123"
              onChange={handleChange}
              values={values.userName}
            />
            {console.log(values.userName)}
            <label for="floatingInput">User Name</label>
          </div>
          <div className="form-floating">
            <input
              name="password"
              type="password"
              className="form-control"
              placeholder="112234344rrttyyuu"
              onChange={handleChange}
              values={values.password}
            />
            {console.log(values.password)}
            <label for="floatingInput">Password</label>
          </div>
          <div className="form-floating">
            <input
              name="email"
              type="string"
              className="form-control"
              placeholder="name@example.com"
              onChange={handleChange}
              values={values.email}
            />
            {console.log(values.email)}
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              name="phoneNumber"
              type="string"
              className="form-control"
              placeholder="555-555-5555"
              onChange={handleChange}
              values={values.phoneNumber}
            />
            {console.log(values.phoneNumber)}
            <label for="floatingInput">Phone Number</label>
          </div>
          <button className="w-10 btn btn-lg btn-primary" type="submit">
            REGISTER
          </button>
          <p className="mt-5 mb-3 text-muted">© 2021</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
