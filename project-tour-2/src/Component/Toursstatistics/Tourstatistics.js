import React from 'react'
// import AOS from 'aos'Tour
import "./Tourstatistics.css"

import PureCounter from '@srexi/purecounterjs';
export default function Tourstatistics() {
    new PureCounter();

    return (
       <>
            <div className="container-fluid bg-light p-4" id="b-o-c-f">
                <div className="container">
                    <div className="jumbotron bg-transparent text-center p-2">
                        <h4>Our</h4>
                        <h2>Tours Statistics</h2>
                        <p>Still.......Counting on</p>
                    </div>
                    <div className="row align-item-center" id="tour-count-row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="col" id="counter">
                                <h3 data-purecounter-start="0" 
                                    data-purecounter-end="1000"
                                    className="purecounter">
                                        +0
                                </h3>
                                <p>TOTAL PLACES</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="col" id="counter">
                                <h3 data-purecounter-start="0" 
                                    data-purecounter-end="10000"
                                    className="purecounter">
                                        +0
                                </h3>
                                <p>POPULAR PLACES</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="col" id="counter">
                                <h3 data-purecounter-start="0" 
                                    data-purecounter-end="10000"
                                    className="purecounter">
                                        +0
                                </h3>
                                <p>OUR TRIPS</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="col" id="counter">
                                <h3 data-purecounter-start="0" 
                                    data-purecounter-end="1002"
                                    className="purecounter">
                                        +0
                                </h3>
                                <p>HAPPY CLIENTS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}
