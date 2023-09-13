import React from 'react'
import './Banner.css'
export default function Banner() {
  return (
    <>
      <div id="demo" class="carousel slide" data-ride="carousel">

        {/* <!-- Indicators --> */}
        
        
        {/* <!-- The slideshow --> */}
        <div class="carousel-inner">
            <div class="carousel-item active" id="banner">
                <div className="container" id="banner-content">
                    <h4>Pocket Kashmir Ex Delhi (GPKD)</h4>
                    <p className='text-white'>Katra, Srinagar , Sonmarg , Gulmarg , Pahalgam</p>
                    <p className='text-white'>9 Days,8 Nights<span>Starting from ₹ 14699.00/-</span></p>
                    <button className="btn text-white">Book Now</button>
                </div>
            </div>
            <div class="carousel-item" id="banner">
                <div className="container" id="banner-content">
                    <h4>Kedarnath Tungnath Chopta Ex Delhi (GKTCD)</h4>
                    <p className='text-white'>Haridwar ,Rishikesh , Kedarnath , Tungnath , Chopta</p>
                    <p className='text-white'>7 Days,6 Nights<span>Starting from ₹ 12499.00/-</span></p>
                    <button className="btn text-white">Book Now</button>
                </div>
            </div>
            <div class="carousel-item" id="banner">
                <div className="container" id="banner-content">
                    <h4>Shimla Manali Couple Special Ex Delhi Standard (GSMCSD)</h4>
                    <p className='text-white'>Shimla, Manali , Kullu, Kufri , Jogini Waterfall</p>
                    <p className='text-white'>7 Days,6 Nights<span>Starting from ₹ 12499.00/-</span></p>
                    <button className="btn text-white">Book Now</button>
                </div>
            </div>
            <div class="carousel-item" id="banner">
                <div className="container" id="banner-content">
                    <h4>Magical Ladakh Ex-Leh (GMLL)</h4>
                    <p className='text-white'>Leh, Khardung La, Pangong, Nubra</p>
                    <p className='text-white'>5 Days,4 Nights<span>Starting from ₹ 11500.00/-</span></p>
                    <button className="btn text-white">Book Now</button>
                </div>
            </div>
            <div class="carousel-item" id="banner">
                <div className="container" id="banner-content">
                    <h4>Shimla Manali Couple Special Ex Delhi Standard (GSMCSD)</h4>
                    <p className='text-white'>Shimla, Manali , Kullu, Kufri , Jogini Waterfall</p>
                    <p className='text-white'>7 Days,6 Nights <span>Starting from ₹ 12499.00/-</span></p>
                    <button className="btn text-white">Book Now</button>
                </div>
            </div>
        </div>
        
        {/* <!-- Left and right controls --> */}
        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        </div>
    </>
  )
}
