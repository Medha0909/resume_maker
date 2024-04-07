import {React,useState} from "react";
import './styles.css';
import { FiLogOut } from "react-icons/fi";
import {
    Outlet,
    Link,
  } from "react-router-dom";
  import {useNavigate} from 'react-router-dom';


function Navbar()
{
  let navigate=useNavigate();
    const handleLogout=()=>{
      localStorage.removeItem('token');
      navigate("/login");
    }
    return(

      <div className="bodyNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a href="/" className="navbar-brand">
          <span className="navbar-brand-text">JasumeZ</span>
          </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <ul className="collapse navbar-collapse" id="navbarSupportedContent">
    {
      !localStorage.getItem('token') ?
    (<>
      <Link className="btn btn-dark btn-mid button2" style={{marginTop:"2rem"}} to="/register" type="button" role="button"><i className="fa-solid fa-user" ></i> Register</Link>
      <Link className="btn btn-dark btn-mid " style={{marginTop:"2rem",marginLeft:"2rem"}} to="/login" type="button" role="button"><i className="fa-solid fa-user" ></i> Login</Link>
      </>): (<button type = "button" style={{marginTop:"2rem",marginLeft:"5rem"}} onClick={handleLogout} className="button1 btn btn-danger btn-mid title_button"><span className='icon3'> <FiLogOut /> Logout</span></button>)}
    </ul>
  </div>
</nav>

        <Outlet/>

</div>




       
    );
}

export default Navbar;
