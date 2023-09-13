import React from 'react'
import './Location.css'
// import Slider from 'react-slick'

export default function Location() {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
  return (
    <>
       <div className="container-fluid bg-light p-5" id="top-loc-main">
        <div className="container">
            <div className="jumbotron bg-light text-center p-2">
                <h4>Best Top</h4>
                <h2>Rated Location</h2>
                <p>Pick top destinations for your next holiday</p>
            </div>
            <div className="row responsive" id="loc-main">
                {/* <Slider {...settings}> */}
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child" >
                    <div className="col top-log-1 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p><b>Lorem ipsum dolor sit amet.</b></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-2 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-3 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-4 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-5 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-6 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-7 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 " id="loc-child">
                    <div className="col top-log-8 d-flex align-items-end" id="loc-item">
                        <div className="item">
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                {/* </Slider> */}
            </div>
        </div>
       </div>
    </>
  )
}
