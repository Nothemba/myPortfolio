import React from "react";
import './navbar.css';

function Nav() {
  return (
    <nav className="nav ">
      {/* <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
                data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button> */}
      <a href="#" className="brand nav__brand ml-5" >
        NT
      </a> 
       <ul className="nav__menu collapse navbar-collapse" id="navbarResponsive">
        <li className="nav__item">
          <a href="#" className="nav__link">
            {" "}
            About
          </a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            {" "}
            Experience
          </a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            {" "}
            Porfolio
          </a>{" "}
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            {" "}
            Contact
          </a>{" "}
        </li>
      </ul> 


    </nav>
  );
}

export default Nav;
