
import where1 from '..//assets/where-1.jpg'
import where2 from '..//assets/where-2.jpg'
// import where3 from '../assets/images/where-3.jpg'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where1} alt='' />
            </div>
            <div className='content'>
              <h5>Wedding Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> <b>Time:</b> 3:00 PM - 3:45pm<p></p>
                <b>Location:</b><a href="https://www.google.com/maps?q=The+Basilica+of+St.+Patrick's+Old+Cathedral" target="_blank" rel="noopener noreferrer">The Basilica of St. Patrick's Old Cathedral.</a>(click on it!)<p></p>
<b>Note:</b> Dear guests, we kindly request that you arrive promptly at 3:00 PM or a few minutes earlier. 
The ceremony will begin exactly at 3:00 PM, and we wouldn't want you to miss a moment of our special day.
The mass will last approximately 45 minutes and will feature carefully selected music to enhance this meaningful occasion. Surrounded by our beloved family and friends, we will exchange our vows in this beautiful, historic setting.
              </p>
              <p>
                {/* <i className='ti-time'></i> <span>2:00pm – 4:00pm</span> */}
              </p>
            </div>
          </div>
          <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              {' '}
              <img src={where2} alt='' />
            </div>
            <div className='content'>
              <h5>Weddding Party</h5>
              <p>
                <i className='ti-location-pin'></i> Secret!
              </p>
              <p>
                <i className='ti-time'></i> <span>5:00pm</span>
              </p>
            </div>
          </div>
          {/* <div className='item col-12 col-md-4'>
            {/* <div className='whenwhere-img'>
              {' '}
              <img src={where3} alt='' />
            </div>
            {/* <div className='content'>
              <h5>Accomodations</h5>
              <p>
                <i className='ti-direction-alt'></i> Hotel and distance from
                wedding party restaurant:
              </p>
              <p>
                <i className='ti-direction'></i> The William Vale (7 min)
              </p>
            </div> */} 
        </div> 
        </div>
      </div>
   // </div>
  )
}

export default Where
