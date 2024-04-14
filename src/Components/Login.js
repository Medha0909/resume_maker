import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';  
import {React,useState} from "react";
import './styles.css';
import image_1 from "./images/image-1.jpeg";
import {useNavigate} from 'react-router-dom';

function Login (props){

    const [color,changeColor]=useState("");
    const handleButtonClick = () => {
        changeColor('#ecfe79');
        setTimeout(() => {
          changeColor('');
        }, 1000);
      };
      const [credentials,setCredentials]=useState({username:"",password:""})
      let navigate=useNavigate();
      const handleSubmit=async (e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/reg/login",{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({username:credentials.username, password:credentials.password})
      });
      const json = await response.json()
      console.log(json);
      if(json.success){
        //save the authh token and redirect
        localStorage.setItem('token',json.authtoken);
        props.showAlert("Logged in Succesfully","success");
            navigate("/resume");
      }
      else{
        props.showAlert("Invalid credentials","danger");
      }
    }
    const onChange=(e)=>{
      setCredentials({...credentials,[e.target.name]: e.target.value})
    }


    return(
        <div>
   <div className="index">
  <div className="container1">
    <div className="content">
      <div className="image-box">
      <img className='imf' src={image_1} alt="" />
      </div>
    <form  onSubmit={handleSubmit}>
      <div className="topic">LOGIN PAGE </div>
      <div className="input-box">
        <input type="email" placeholder="Enter Your Email" name="username" value={credentials.username} onChange={onChange} required/>
        <label htmlFor='username'>Enter your email</label>
      </div>
      <div className="input-box">
        <input type="password" placeholder="Enter Password" name="password" value={credentials.password} onChange={onChange} required/>
        <label htmlFor='password'>Enter your password</label>
      </div>
      <div className="input-box">
        <input type="submit" value="LOGIN"/>
      </div>

	    <div id="footer" style={{backgroundColor:`${color}`}}>
        <a href="https://www.linkedin.com/in/medha-dwivedi-558795244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="social-icon fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Medha0909"><i class="social-icon fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/medha.dwivedi.121?mibextid=ZbWKwL"><i class=" social-icon fa-brands fa-facebook"></i></a>
          
      </div>   
    </form>
  </div>
  </div>
  </div>
  </div>
  );
}

export default Login;
