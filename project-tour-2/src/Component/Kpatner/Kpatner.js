import React from 'react'
import './Kpatner.css'

export default function Kpatner() {
  return (
    <>
      <div className="container-fluid" id="kp-c-f">
        <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-12" id="kp-wrap">
                <div className="col text-center" id="kp-item">
                   <h3>KH PARTNER PROGRAM</h3>
                   <a href="/">Registration</a> / <a href="/">Login</a> 
                </div>
                <div className="col text-center" id="kp-item">
                    <h4>Enter your mobile number</h4>
                    <span>+91</span><input type="text" placeholder='Enter Mobile number'/>
                    <button className='d-block'>Continue</button>
                </div>
            </div>
            <div className=" col-lg-8 col-md-9 col-sm-12" id="kp-wrap">
                <div className="col" id="kp-sec2wrap">
                    <h4>BECOME OUR PARTNER</h4>
                    <p>If you have desire to achieve extraordinary goals, financial freedom and start a side business with your regular profession or just want to create a passive income source, then become the part of Kinghills Family and give wings to your dreams !!!</p>
                    <div className="col row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="col" id="kpitem">
                                <h4>400+</h4>
                                <p>TOUR DESTINATIONS</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="col" id="kpitem">
                                <h4>10+</h4>
                                <p>OFFICES</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="col" id="kpitem">
                                <h4>100+</h4>
                                <p>CORPORATE ASSOCIATES</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="col" id="kpitem">
                                <h4>15000+</h4>
                                <p>REGULAR CUSTOMERS</p>
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
