import React from 'react'
import './Destinationplace.css'

export default function Destinationplace() {
  return (
       <>
          <div className="container-fluid" id="desti-place-c-f">
            <div className="contaienr-fluid">
                <div className="row" id="desti-wrap">
                    <div className='col-sm-12 col-md-6 col-lg-3 ' id="desti-item-wrap">
                        {/* city */}
                        <h6>Departure City</h6>
                        <div className="city" id="desti-place-item">
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Your Nearest City</option>
                                <option value="1">City 1</option>
                                <option value="2">City 2</option>
                                <option value="3">City 3</option>
                                <option value="3">City 4</option>
                                <option value="3">City 5</option>
                                <option value="3">City 6</option>
                                <option value="3">City 7</option>
                            </select>
                        </div>
                        <h6>Select Destination</h6>
                        {/* <div className="city row mx-auto" id="desti-place-item">
                            <span className='col-3'>City - 1</span>
                            <span className='col-3'>City - 2</span>
                            <span className='col-3'>city - 3</span>
                            <span className='col-3'>City - 4</span>
                            <span className='col-3'>City - 5</span>
                            <span className='col-3'>City - 6</span>
                        </div> */}

                        {/*  */}
                        <div id="accordion">
                            <div className="card">
                                <div className="card-header">
                                  <a className="card-link" data-toggle="collapse" href="#collapseOne">
                                    India
                                  </a>
                                </div>
                                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                    <div className="card-body row mx-auto" id="desti-place-item">
                                        <span className='col-3'>City - 1</span>
                                        <span className='col-3'>City - 2</span>
                                        <span className='col-3'>city - 3</span>
                                        <span className='col-3'>City - 4</span>
                                        <span className='col-3'>City - 5</span>
                                        <span className='col-3'>City - 6</span>  
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                       International 
                                    </a>
                                </div>
                                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                    <div className="card-body row mx-auto" id="desti-place-item">
                                        <span className='col-3'>City - 1</span>
                                        <span className='col-3'>City - 2</span>
                                        <span className='col-3'>city - 3</span>
                                        <span className='col-3'>City - 4</span>
                                        <span className='col-3'>City - 5</span>
                                        <span className='col-3'>City - 6</span>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h6>Sort By</h6>
                        <div className="city p-4" id="desti-place-item">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio"/>
                                Price Low to High
                              </label>
                            </div>
                            <div class="form-check">
                              <label className="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio"/>
                                Price High to Low
                              </label>
                            </div>
                        </div>
                    </div>

                    {/* sec -2 */}
                    <div className='col-sm-12 col-md-6 col-lg-9'id="desti-right-wrap">
                        <div className="col-12">
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2" id="desti-sec2-item-wrap">
                                <div className="col-lg-3 col-md-6 col-sm-12 p-0">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <img src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <span className='badge badge-success p-2'>Group Tour</span>
                                        <h6>Demo</h6>
                                        <p>
                                            <span><i class="fa-solid fa-hotel"></i> Hotel</span>
                                            <span>  <i class="fa-solid fa-camera"></i> Sightseeing*</span>
                                            <span>  <i class="fa-solid fa-plane"></i> Flight*</span>
                                            <span>  <i class="fa-solid fa-spoon"></i> Meal</span>
                                        </p>
                                        <p><i class="fa-solid fa-location-dot"></i> Jaipur</p>
                                        <button className="btn">Quick Quotation</button>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 text-right" id="desti-sec2-item">
                                    <div className="col p-0" id="desti-sec2-item">
                                        <h6 className=''>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <i class="fa-solid fa-share-nodes"></i>
                                        </h6>
                                        <p>SUPER DEAL PRICE</p>
                                        <span>18-Aug, 01-Sep, 15-Sep,</span>
                                        <h5>₹ 3,100/-</h5>
                                        <span>per person on sharing</span>
                                        <button className='btn'>Get Details</button>
                                        <button className='btn'>Enquire Now</button>
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
