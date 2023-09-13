import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact1.css'
export default function Contact1() {

    // mail
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();   
    //  emailjs.sendForm('service_uf5q6nt', 'template_n73gy3b', form.current, 'D0vSWOc5Q7DiboNXA')
     emailjs.sendForm('service_ieq6aff', 'template_pxnnmtd', form.current, '2I2fK2zwYydUHIQPa')

      .then((result) => {
        alert("send data")
          console.log(result.text);
      }, (error) => {
        alert("not send")
          console.log(error.text);
      });
  };
  return (
    <>
    <div className="container-fluid" id="contact1-c-f">
        <div className="container-fluid" id="contact1-container">
            <div className="row">
                <div className="col-lg-7 col-md-6 col-sm-12"  id="contact1-item">
                    <div className="col">
                        <h3>Get In Touch With Me</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" name="user_name" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Your Email</label>
                                <input type="email" class="form-control" id="exampleInputPassword1" name="user_email" placeholder="Email"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>  
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12" id="contact1-item">
                    <div className="col">
                        <div className="col">
                            <p>For any franchise enquiry & B2B partners then feel free to contact us on <b>+91-9773356421</b> or email on <b>hr@kinghillstravels.com</b></p>
                        </div>
                        <div className="col p-0" id="contact1-item-cl">
                            <div className="col d-flex">
                                <div className="p-0 col-lg-8">
                                    <h4>Our Corporate - Delhi Office</h4>
                                </div>
                                <div className="p-0 col-lg-4">
                                    <img src="../logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col" id="contact1-item-cl-2">
                                <h5>CORPORATE OFFICE</h5>
                            </div>
                            <div className="col">
                                <p>+91-8974563210</p>
                                <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                                <p>Get Location</p>
                                <hr/>
                                <div className="row">
                                    <div className="col">
                                        <p>WORKING HOURS</p>
                                        <p>10:00 AM - 07:00 PM</p>
                                    </div>
                                    <div className="col">
                                        <p className='' id="con1-opne-link">OPEN NOW</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sec -2 */}
            <div className="row" id="sec2-title">
                <div className="col">
                    <h4>OUR OFFICES</h4>
                </div>
            </div>
            <div className="row" id="con1-sec2-wrap">
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className= '' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12" id="con1-sec2-wrap2">
                    <div className="col p-0 con1-sec2-item">
                        <div className="col row">
                            <div className="col-lg-8">
                                <h4>Our Corporate - Delhi Office</h4>
                            </div>
                            <div className=" col-lg-4">
                                <img src="../logo.png" alt="" />
                            </div>
                        </div>
                        <div className="col" id="contact1-item-cl-2">
                            <h5>CORPORATE OFFICE</h5>
                        </div>
                        <div className="col">
                            <p>+91-8974563210</p>
                            <p>Unit No. 806, A Tower, I-thum Tower, Sector 62, Noida</p>
                            <p>Get Location</p>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <p>WORKING HOURS</p>
                                    <p>10:00 AM - 07:00 PM</p>
                                </div>
                                <div className="col">
                                    <p className='' id="con1-opne-link">OPEN NOW</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                

            </div>
        </div>
    </div>
    </>
    )
}
