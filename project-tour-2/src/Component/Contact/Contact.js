import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// custome css
import "./Contact.css"

export default function Contact() {
  return (
    <>
       <div className="container-fluid p-5 bg-gray" id="con-container-f">
            <div className="container">
                <div className="jumbotron bg-transparent text-center p-2">
                    <h4>Our</h4>
                    <h2>Tours Statistics</h2>
                    <p>Still.......Counting on</p>
                </div>
                {/* contact slider */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    >
                    <SwiperSlide className='col-lg-12 col-md-12 col-sm-12 p-5 row'>
                        <div className="row p-0" id="con-slid-item">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='col-lg-12 col-md-12 col-sm-12 p-5 row'>
                        <div className="row p-0" id="con-slid-item">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='col-lg-12 col-md-12 col-sm-12 p-5 row'>
                        <div className="row p-0" id="con-slid-item">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='col-lg-12 col-md-12 col-sm-12 p-5 row'>
                        <div className="row p-0" id="con-slid-item">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='col-lg-12 col-md-12 col-sm-12 p-5 row'>
                        <div className="row p-0" id="con-slid-item">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='col-lg-12 col-md-12 col-sm-12 p-5 row'>
                        <div className="row p-0" id="con-slid-item">
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="col" id='con-slid-contant'>
                                    <h3 className='text-center'>Raipur</h3>
                                    <hr />
                                    <p><i class="fa-solid fa-phone p-2"></i><span>+91-9874563210</span></p>
                                    <p><i class="fa-solid fa-building p-2"></i><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, quas.</span></p>
                                    <hr />
                                    <p><i class="fa-solid fa-location-dot p-2"></i><span>Get Location</span></p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
               </Swiper>
            </div>
       </div>
    </>
  )
}
