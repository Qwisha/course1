// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { FaLinkedin,FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
// import React, { useState } from "react";

import {Blocks} from  'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


import { useState, useEffect } from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Login from './Login';
import Signin from './Signin';
// https://webartinfo.com/templatemonster/7-DEW/index.html#
function App() {
  const [show, setShow] = useState(false);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), 1000);
      return () => {
        clearTimeout(timer1);
      };
    },    []
  );
  return show  ?  
  <div>
     <header className='bg-white '>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src={require('./image/logo.png')} width="60" height="60" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item py-3">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item py-3">
              <a className="nav-link" href="./About">About</a>
            </li>
            <li className="nav-item py-3 dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Main Page</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown09">
                <li><a className="dropdown-item" href="#">All Courses</a></li>
                <li><a className="dropdown-item" href="#">Order Successful</a></li>
              </ul>
            </li>
            <li className="nav-item py-3 dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Account page</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown09">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">My Courses</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item py-3 dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">extra page</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown09">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
               <li className="nav-item py-3">
              <a className="nav-link" href="./Contact">Contact</a>
            </li>
          </ul>
          <a href="./login" style={{fontSize:"20px"}} className='text-decoration-none text-black fw-bold mx-2'>Log In</a>
          <a href="./Signin"><button className='button-red'>Sign In</button></a>
        </div>
      </div>
    </nav>

        </div>
      </header>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Signin" element={ <Signin/> } />
      </Routes>     
 
    <footer className='bg'>
      <div class="py-5 footer">
         <div>
            <div class="container py-3">
               <div class="row">
                  <div class="col-6 col-lg-2 col-md-3">
                     <h6 class="mb-3 text-body fw-bold">COMPANY</h6>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="about.html">About</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">All Courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="careers.html">Careers</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="profile.html">Account</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="testimonials.html">Testimonials</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="contact.html">Contact Us</a>
                  </div>
                  <div class="col-6 col-lg-2 col-md-3">
                     <h6 class="mb-3 text-body fw-bold">CATEGORIES</h6>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Illustration courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Craft courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Marketing &amp; Business</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Photography &amp; Video</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Design courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">3D &amp; Animation</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Architecture &amp; Spaces</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Web &amp; App Design</a>
                  </div>
                  <div class="col-6 col-lg-2 col-md-3">
                     <h6 class="mb-3 text-body fw-bold">SOFTWARE</h6>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Adobe Photoshop</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Adobe Illustrator</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Adobe After Effects</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Procreate courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Cinema 4D courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Adobe Lightroom </a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Adobe InDesign </a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Camera Raw </a>
                  </div>
                  <div class="col-6 col-lg-2 col-md-3">
                     <h6 class="mb-3 text-body fw-bold">LISTS</h6>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">New courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Top rated</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Popular courses</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Courses on sale</a>
                     <a class="py-1 text-decoration-none d-block w-100 text-muted" href="courses.html">Course Bundles</a>
                  </div>
                  <div class="col-6 col-lg-4 col-md-3 ps-lg-5">
                     <a href="index.html" class="brand d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
                     <img src={require('./image/logo.png')} class="img-fluid" alt="7-DEW"/>
                     </a>
                     <h6 class="mb-2 text-body mt-5 fw-bold text-uppercase">DOWNLOAD THE 7-DEW APP</h6>
                     <p>Get new clients, grow your business.</p>
                     <a class="me-2" href="#"><img src={require('./image/asset 24.png')} class="img-fluid app-icon" alt="#" loading="lazy"/></a>
                     <a href="#"><img src={require('./image/asset 25.png')} class="img-fluid app-icon" alt="#" loading="lazy"/></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="py-4 bg-white footer-copyright">
         <div class="container">
            <div class="row align-items-center">
               <div class="col-md-8">
                  <span class="me-3 small">©2022 <b class="text-primary">7-dew</b>. All rights reserved</span>
                  <a class="text-black-50 small mx-3 text-decoration-none" href="terms-and-conditions.html">Terms of use</a>
                  <a class="text-black-50 small mx-3 text-decoration-none" href="privacy-policy.html">Privacy policy</a>
               </div>
               <div class="col-md-4 text-end">
                  <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><FaFacebookF/></a>
                  <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><FaTwitter/></a>
                  <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><FaLinkedin/></a>
                  <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><FaYoutube/></a>
                  <a target="_blank" href="#" class="btn social-btn btn-sm text-decoration-none"><FaInstagram/></a>
               </div>
            </div>
         </div>
      </div>
    </footer> 

  </div>
 : <div className="spin_re">
    <div className="spin_ab">
    <Blocks
 visible={true}
 height="100"
 width="100"

 ariaLabel="blocks-loading"
 wrapperStyle={{}}
 wrapperClass="blocks-wrapper"
/>
    </div>
 </div>
 
}

export default App;
