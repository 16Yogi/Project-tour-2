import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
        <>
            <div className="container-fluid bg-dark p-3" id="footer-c-f">
                <div className="containner-fluid row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="col" id='footer-wrap'>
                            <Link to="/">
                               <img src="./logo.png" alt=""  className=''/>
                            </Link>
                            <p>King Hills Travels – an Indian travel company excels in domestic & international tour packages</p>
                           <p>Social Icons</p>
                           <ul className='d-flex justify-contant-between p-0' id="icon">
                            <li className='list-unstyled  p-0 mx-1'><i class="fa-brands fa-facebook-f"></i></li>
                            <li className='list-unstyled  p-0 mx-1'><i class="fa-brands fa-youtube"></i></li>
                            <li className='list-unstyled  p-0 mx-1'><i class="fa-brands fa-instagram"></i></li>
                           </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="col" id='footer-wrap-a'>
                            <p>Useful Link</p>
                            <ul className='p-0'>
                                <li className='list-unstyled p-0 '>
                                    <Link to="/" className='nav-link p-0' id="link-cl"><i class="fa-solid fa-angles-right"></i>Dashboard</Link>
                                </li>
                                <li className='list-unstyled p-0 '>
                                    <Link to="/About" className='nav-link p-0' id="link-cl">
                                       <i class="fa-solid fa-angles-right"></i>About Us
                                    </Link>
                                </li>
                                <li className='list-unstyled p-0 '>
                                    <i class="fa-solid fa-angles-right"></i>Group Tours</li>
                                <li className='list-unstyled p-0 '>
                                    <i class="fa-solid fa-angles-right"></i>Personal Tour</li>
                                <li className='list-unstyled p-0 '>
                                    <i class="fa-solid fa-angles-right"></i>Customized Tour</li>
                                <li className='list-unstyled p-0 '>
                                    <i class="fa-solid fa-angles-right"></i>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="col" id='footer-wrap-a'>
                            <p>Our Company Policies</p>
                            <ul className=' p-0'>
                                <li className='list-unstyled  p-0'><i class="fa-solid fa-angles-right"></i>Booking Terms & Conditions</li>
                                <li className='list-unstyled  p-0'><i class="fa-solid fa-angles-right"></i>Company Privacy Policy</li>
                                <li className='list-unstyled  p-0'><i class="fa-solid fa-angles-right"></i>Cancellation Policy</li>
                                <li className='list-unstyled  p-0'><i class="fa-solid fa-angles-right"></i>KH Partner Term & Condition</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="col" id='footer-wrap-a'>
                            <p>Contact Info</p>
                            <ul className=' p-0'>
                                <li className="list-unstyled  p-0">
                                    <i class="fa-solid fa-house-chimney"></i>
                                    Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida
                                </li>
                                <li className="list-unstyled  p-0">
                                    <i class="fa-solid fa-phone"></i>
                                    +91-7896541230
                                </li>
                                <li className="list-unstyled  p-0">
                                    <i class="fa-solid fa-envelope"></i>
                                    Enquire online
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
           </div>
        </>
    )
}
