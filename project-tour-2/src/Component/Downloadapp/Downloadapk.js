import React from 'react'
import './Downloadapk.css'

export default function Downloadapk() {
  return (
    <>
        <div className="container-fluid p-5" id="download-apk-main">
            <div className="container">
                <div className="col text-center p-4">
                   <h4>Subscribe</h4>
                   <h2>Our Newsletter</h2>
                   <p>It is a long established fact that a reader will be distracted by the readable.</p>  
                </div>
                <div className="col text-center">
                    <button className='btn btn-info'><i class="fa-brands fa-android p-2"></i>Download App</button>
                </div>
            </div>
        </div>
    </>
  )
}
