import { useState } from "react";
import React from "react";
import useForm from "../UseForm/useForm";

const Logout = (props) => {
  const {values, handleChange, handleSubmit} = useForm(logout);
  const [willRedirect, setWillRedirect] =useState(false);

  function logout () {      
    props.logoutUser(values); 
    console.log(values);
    setWillRedirect(true);
    
  }
  if(willRedirect===false){
      return (
        <div>
          <form>
            <button
              className="w-10 btn btn-lg btn-primary"
              type="input"
              onSubmit={handleSubmit}
              onChange={handleChange}
              values={localStorage.getItem("token")}
            >
              Logout
            </button>
          </form>
        </div>
      );
    }
  else {
    return <willRedirect to = {`/login/`}/>;
  }
}
export default Logout;