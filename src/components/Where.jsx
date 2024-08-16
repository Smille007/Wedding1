
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
              <h5> Ceremony</h5>
              <p>
                <i className='ti-location-pin'></i> <b>Time:</b> 3:00 PM - 3:45pm<p></p>
                <b>Location:</b><a href="https://www.google.com/maps?q=The+Basilica+of+St.+Patrick's+Old+Cathedral" target="_blank" rel="noopener noreferrer">The Basilica of St. Patrick's Old Cathedral.</a>(click on it!)<p></p>
<b>Note:</b> Dear guests, we kindly request that you arrive promptly at 3:00 PM or a few minutes earlier. 
The ceremony will begin exactly at 3:00 PM, and we wouldn't want you to miss a moment of our special day.
The mass will last approximately 45 minutes and will feature carefully selected music to enhance this meaningful occasion. Surrounded by our beloved family and friends, we will exchange our vows in this beautiful, historic setting.<p></p>
<b>Dress Code: </b> Wedding gowns, bridesmaid dresses and guest attire should be modest in nature befitting the sacred character of the celebration in the Basilica. Gowns and dresses with bare midriffs, short dresses or skirts, high slits, skin-tight outfits, plunging necklines or backless gowns are not appropriate for the wedding rehearsal and ceremony. Strapless gowns or spaghetti straps are not permitted for the bride or her bridesmaids unless a jacket, shawl, or other covering is worn over the shoulders during the ceremony.
There are no exceptions.
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
              <h5>Reception</h5>
              <p>
                <i className='ti-location-pin'></i> <b>Transportation & Reception: </b>
After the ceremony, please gather at the church entrance for transportation to the reception venue. The ride will take approximately 45 minutes.<p></p>
<b>Reception Timeline: </b><br></br>

5:30 PM  Cocktail Hour officially begins <br></br>
6:00 PM: Special event<br></br>
6:30 PM: Couple/Family Dance <br></br>
6:45 PM: Toasts<br></br>
7:00 PM: Dinner is served <br></br>
8:30 PM: Party<br></br>
After 11:00 PM: After-hours party for our more adventurous guests<br></br>

Our amazing planner, Tiffany, will be coordinating events at the venue to ensure you don't miss a thing!<p> </p>

<b>Dress Code: </b>  Please refrain from wearing white and red clothes. If you're feeling frisky, bring a bathing suit!<p></p>
{/* RSVP: Please scroll down to the reservation form and answer all questions. This helps us ensure everything is perfect for your attendance. */}

We can't wait to celebrate with you!
                <i className='ti-time'></i> <span></span>
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
