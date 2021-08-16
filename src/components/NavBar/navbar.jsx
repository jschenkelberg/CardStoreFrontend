import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav  ">
            <li className="nav-item">
              
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link active">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/register" className="nav-link active">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
