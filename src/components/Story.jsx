
import storyImage from '..//assets/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mb-30'>
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Our love.</h4>
            <h3 className='oliven-story-title'>Our Story</h3>
            <p>
            Our story began during the pandemic in an unexpected place - Zion National Park in Utah. Surrounded by our dear friends and the breathtaking landscape, we first crossed paths. As we dusted off our dance moves, we started to get to know each other, and a beautiful friendship began to blossom.
Feeling a connection, we decided to continue our adventure in Tulum for Daryna's birthday celebration. It was under the magical Mexican sky that our friendship deepened into something more. We found ourselves lost in conversation, talking from sunset to sunrise, and it was in those long, heartfelt discussions that we fell in love.
From the red rocks of Utah to the sandy beaches of Tulum, our journey together has been filled with unexpected joy and adventure. We can't wait to begin the next chapter of our story with all of you by our side.  {/*  Write it like we telling the story. change 'Daryna and Johnny' to 'We'*/}
            </p>
            <h4>Oct 17th, 2022, she said yes!</h4>
            <p>
            As my birthday approached, Johnny surprised me with a trip to the beautiful Azores Islands. Little did I know, he had something even more special planned.
On a magical evening just before my birthday, Johnny took me to a picturesque tea plantation. As the sun began to set, painting the sky in breathtaking hues, I noticed Johnny seemed a bit nervous.. He suggested we take a stroll through the rows of tea plants.
As we walked hand in hand, admiring the stunning vista, Johnny suddenly stopped. He turned to me, his eyes full of love and a hint of anxiousness. Before I knew it, he was down on one knee, holding a small box.
In that perfect moment, with the sun dipping below the horizon and the fragrant scent of tea leaves in the air, Johnny asked me to marry him. I was overwhelmed with joy and emotion. Of course, I said yes!
Later, I learned how meticulously Johnny had planned everything - choosing the ideal location, timing it perfectly with the sunset, and even coordinating with the photographer to ensure we had a private moment captured. Despite his worries, everything unfolded beautifully.
It was the most romantic surprise I could have imagined, and the perfect start to our engagement journey. We're so excited to continue our adventure together and to celebrate our love with all of you at our wedding!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
