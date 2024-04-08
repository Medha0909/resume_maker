import React from "react";
import './styles.css';
import first from "./images/first.jpeg";
import second from "./images/second.jpeg";
import third from "./images/third.jpeg";
import title from "./images/title.jpeg";
import sample from "./images/sample.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    Link
  } from "react-router-dom";


function Home()
{
    return(
        <div className="body1">
    <section className="colored-section" id="title">
      <div className="container-fluid1">
      <Row>
        <Col>
            <h1 className="big-heading">"Professionalism Maketh Success"<br/></h1>
            <h2 className="big-heading1"><br/>A one stop platform to create white-collar resumes for your dream job.</h2>
            <Link type="button" className="btn btn-dark btn-mid title_button" role="button" to="/register"><i className="fa-solid fa-user"></i> Register</Link>
            <Link type="button" className="btn btn-outline-light btn-mid title_button" role="button" to="/login"><i className="fa-solid fa-user"></i> Login</Link>
          </Col>
          <Col>
            <img className="title-image" src={title} alt="title"/>
          </Col>
        </Row>
      </div>
    </section>
  
    <section className="white-section"  id="features">
      <div className="container-fluid">
        <div className="row">
          <div className="feature-box col-lg-4">
            <i className="icon fa-sharp fa-solid fa-trophy fa-2x"></i>
            <h3 className="feature-title">Resumes for Individuals of different Professions</h3>
            <p>Jasumez helps you to create well formatted and well designed resumes no matter if you are currently following your dream profession or is in the process to grab it.</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-face-smile fa-2x"></i>
            <h3 className="feature-title">Beauitfying Your Achievements!</h3>
            <p>Being humble about your skillset and talents but proud of the way you showcase them is the key to winning interviews and imprinting minds of recruiters.</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fa-solid fa-circle-check fa-2x"></i>
            <h3 className="feature-title">A Recruiter - Tested resume maker Tool</h3>
            <p>Our resume builder and its pre-generated content are tested by recruiters and IT experts.We help your resume become truly competitive in the hiring process.</p>
          </div>
        </div>
      </div>
    </section>
  
    <section className="colored-section" id="base">
      <div className="container-fluid2">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="big-heading">Use the best resume maker as your guide.</h1>
            <p>Use professional field tested resume that follow the exact 'rsume rules' employers look for.Easy to use and done within minutes-try now for free!</p>
            <Link type="button" className="btn btn-dark btn-mid title_button" role="button" to="/resume"> Create my resume</Link>
          </div>
    <div className="col-lg-6">
    <img className="base_image" src={sample} alt="sample"/>
    </div>
      </div>
  </div>
  </section>
     
  <section className="white-section"  id="base1">
  <div className="container-fluid">
    <Row>
    <Col>
      <div className="cont">
        <h3 className="feature-title1"><i className="icon fa-solid fa-circle-chevron-right"></i> What are Resumes?</h3>
			  <p>Resumes are paperwork containing statements that impart information, about individual's academical and co- curriculum skills specific to there area of profession, to the hiring recruiting panel.</p>
			</div>
      </Col>
      <Col>
			  <img className="base_image2" src={first} alt="base image"/>
      </Col>
    </Row>
		<Row>
    <Col>
			<div className="cont">
        <h3 className="feature-title1"><i className="icon fa-solid fa-circle-chevron-right"></i> What is the Need for Resumes?</h3>
        <p>Academic knowledge,  skills and experience gained at workspace by individuals in order to grab opportunities for there required carrier options, cannot be all communicated verbally during interviews due to time constraints. Hence, official pre-defined resumes are presented for interviewers to get ahold of your skills accordingly.</p>
      </div>
      </Col>
      <Col>
			  <img className="base_image1" src={second} alt="base image"/>
      </Col>
      </Row>
			<Row>
      <Col>
				<div className="cont">
				<h3 className="feature-title1"><i className="icon fa-solid fa-circle-chevron-right"></i> How does Jasumez helps job aspiring candidates?</h3>
        <p>Jasumez helps candidates to create and manipulate unambiguous resumes at there own will and according to there choice of profession, to land the job position and win recruiters hearts.</p>
			</div>
      </Col>
      <Col>
        <img className="base_image1" src={third} alt="base image"/>
      </Col>
      </Row>
    </div>
   </section>
		 
    <footer  className="white-section" id="footer">
      <div className="container-fluid3">
        <a href="https://www.linkedin.com/in/medha-dwivedi-558795244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="social-icon fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/Medha0909"><i className="social-icon fa-brands fa-github"></i></a>
        <a href="https://www.facebook.com/medha.dwivedi.121?mibextid=ZbWKwL"><i className=" social-icon fa-brands fa-facebook"></i></a>
        <p>© Copyright Medha Dwivedi.</p>
       </div>
    </footer>
    </div>
  
    )
}

export default Home;



