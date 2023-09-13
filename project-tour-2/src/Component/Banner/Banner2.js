import React from 'react'
import './Banner2.css'

export default function Banner2(banner2Title) {
  return (
    <>
      <div className="container-fluid " id="banner2-main-cf">
        <div className="container-fluid p-0" id="banner2-main">
          <div className="container-fluid p-0" id="banner2-child">
            <div className="col" id="banner2-wrap">
              <p>{banner2Title.banner2nameTitle}</p>
              <p>Making a solo tour can get one a new experience and perspective, and offer a completely new dimension to one’s life. However, the real essence of a travel is joyful when one can have someone else to share memories about the journey made together.</p>
              <p>Group holiday packages with us will include transfers, accommodation at a hotel or resort, meals as well as sightseeing tours.</p>
              <p>For short vacations and weekend getaways, you can also check for group tour packages in India, as there is plenty within this country that is worth witnessing. Book your group tour package now and explore countless wonders that reside on this planet.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
