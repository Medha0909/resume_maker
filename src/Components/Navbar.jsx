import {React,useState} from "react";
import './styles.css';
import {
    Outlet
  } from "react-router-dom";
  import Register from "./Register";


function Navbar()
{
    
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a href="/" className="navbar-brand">
          <span className="navbar-brand-text">JasumeZ</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" style={{color:"#1f1f1f"}} href="/register"><i class="fa-solid fa-user nav-button" ></i> Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"#1f1f1f"}} href="/login"><i class="fa-solid fa-user nav-button"></i> Login</a>
              </li>
                <li className="nav-item">
                  <a className="nav-link" style={{color:"#1f1f1f"}} href="#footer" > Contact</a>
                </li>
            </ul>
          </div>
        </nav>
        <Outlet/>
        </div>
    );
}

export default Navbar;