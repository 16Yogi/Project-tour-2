import React from 'react'
import "./News.css"
export default function News() {
  return (
    <>
        <div className="container-fluid p-0" id="news-c-f">
            <div className="ccntainer-fluid" id="news-c-f-a">
                <div className="container" id="news-wrapper">
                    <div className="col text-center" id="News-item">
                        <h4>Subscribe</h4>
                        <h2>Our Newsletter</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable.</p>
                    </div>
                    <div className="col p-0">
                        <div className="col p-0 d-flex col-news-item" id="News-item 11">
                            <input type="Search" placeholder='Enter Mail' />
                            <button className="btn">Subscribe</button>
                        </div>
                    </div>                       
                </div>    
            </div>
        </div>
    </>
  )
}
