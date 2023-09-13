import React from 'react'
import './Nav.css'
// import Home from '../../Pages/Home'
// import About from '../../Pages/About'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <>
      <div className="container-fluid" id="nav-m-c-f">
        {/* top bar */}
            <div className="container-fluid p-3" id="nav-c-f">
                <div className="row d-flex justify-content-end p-0" id="nav-r">
                    {/* search bar */}
                    <div className="col-8 wrapper p-0">
                        <ul className="list-style-none p-0 d-flex justify-content-between" id="nav-ul-first">
                            <li className="list-unstyled">
                                <i className="fa-solid fa-location-dot p-2"></i>
                                <span>Where do you want to travel?</span>
                            </li>
                            <li className="list-unstyled">
                                <i className="fa-solid fa-indian-rupee-sign p-2"></i>
                                <span>Budget</span>
                            </li>
                            <li className="list-unstyled">
                                <i className="fa-solid fa-bars p-2"></i>
                                <span>Group Tour</span>
                            </li>
                            <li className="list-unstyled p-0 text-white">
                                <button className='rounded-circle border-none text-white p-0'>
                                    <i className="fa-solid fa-magnifying-glass p-0"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* end search bar */}
                    {/* icons */}
                    <div className="col-2 p-0" id="nav-t-i">
                        <ul className="d-flex justify-content-between" id="nav-t2-ul">
                            <li className='list-unstyled text-center m-1'>
                                <i className="fa-solid fa-phone"></i>
                            </li>
                            <li className='list-unstyled text-center m-1'>
                                <i className="fa-solid fa-user"></i>
                            </li>
                            <li className='list-unstyled text-center m-1'>
                                <i className="fa-solid fa-bars"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* end top */}

            {/* <div className="row">
              
            </div> */}
          </div>  


            {/* 2nd navigation bar */}
          <div className="container-fluid" id="nav-m-c-f">
            <nav className="navbar navbar-expand-lg navbar-light"  id="sec-nav-con">
              <a className="navbar-brand" href="/">
                <img src="./logo.png" alt="" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            
              <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                <ul className="navbar-nav d-flex justify-content-between" id="sec-nav-ul">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Destinations 
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/Destination" className='dropdown-item'>India</Link>
                      <Link to="/Destination" className='dropdown-item'>International</Link>
                      <Link to="/Destination" className='dropdown-item'>Trips From</Link>
                      
                      {/* <a className="dropdown-item" href="/">International</a>
                      <a className="dropdown-item" href="/">Trips From</a> */}
                    </div>
                  </li>
                  <li className="nav-item active">
                    {/* <a className="nav-link" href="/Grouptour">Group Tours</a> */}
                    <Link to="/Grouptour" className='nav-link'>Group Tours</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Personal Tours
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="/Personaltour" className='dropdown-item'>Standard Trip</Link>
                      <Link to="/Personaltour" className='dropdown-item'>International</Link>
                     
                      {/* <a className="dropdown-item" href="/">Standard Trip</a> */}
                      {/* <a className="dropdown-item" href="/">International</a> */}
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="/Custamizetour" className='nav-link'>Customised Tours</Link>
                    {/* <a className="nav-link disabled" href="/">Customised Tours</a> */}
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link disabled" href="/About">About Us</a> */}
                    <Link to="/About" className='nav-link'>About Us</Link>

                  </li>
                  <li className="nav-item">
                    <Link to="/Contactmain" className='nav-link'>Contact Us</Link>
                    {/* <a className="nav-link disabled" href="/">Contact Us</a> */}
                  </li>
                  <li className="nav-item">
                    <Link to="/Kpatner">
                      <button className='btn'>+ KH Partners</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
      </div>
    </>
  )
}
