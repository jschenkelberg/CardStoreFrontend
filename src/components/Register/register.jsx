import { initial } from 'lodash';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { canConstructResponseFromBodyStream } from 'workbox-core/_private';




const Register = () => {
    
    const [firstname, setFirstName] = useState();
    const [lastName, setLastName]= useState();
    const [userName, setUserName]= useState();
    const [passWord, setPassword]= useState();
    const [emailAdress, setEmailAddress]= useState();
    const [phoneNumber, setPhoneNumber] = useState();
    

const submit =(e:SyntheticEvent) =>{

}


    return (
      <div>
        <div>
          <div className="row row-spacer">
            <h1>PKCJJ Card Shop Register</h1>
          </div>

          <form className="col-md-2" onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please Register</h1>

            <div className="form-floating">
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="John"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="floatingInput">First Name </label>
            </div>
            <div className="form-floating">
              <input
                type="Last Name"
                className="form-control"
                id="floatingPassword"
                placeholder="Doe"
                onChange={(e) => setLastName(e.target.value)}
              />
              <label for="floatingPassword">Last Name</label>
            </div>
            <div className="form-floating">
              <input
                type="User Name"
                className="form-control"
                id="floatingInput"
                placeholder="John123"
                onChange={(e) => setUserName(e.target.value)}
              />
              <label for="floatingInput">User Name</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingInput"
                placeholder="112234344rrttyyuu"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingInput">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="int"
                className="form-control"
                id="floatingInput"
                placeholder="555-555-5555"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
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
}
 
export default Register;