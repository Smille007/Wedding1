import React from 'react';
import Bride from '../assets/bride.jpg';
import Groom from '../assets/groom.jpg';
import 'run-parallel';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Bridegroom() {
  return (
    <div id='couple' className='bridegroom clear section-padding bg-pink'>
      <div className='container'>
        <div className='row mb-60'>
          <div className='col-md-6'>
            <div
              className='item toright mb-30 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <div className='img'>
                <img src={Bride} alt='Bride' />
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Daryna Vershinina <i className='ti-heart'></i>
                  </h6>
                  <span>The Bride</span>
                  <p>Daryna is the best star you can manage to find in a world!</p>
                  <div className='social'>
                    <div className='full-width'>
                      <a
                        href='https://www.instagram.com/smille007/'
                        className='icon'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                      {/* Instagram link for the bride */}
                      <a
                        href='mailto:smille007@gmail.com'
                        className='icon'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='far fa-envelope'></i>
                      </a>
                      {/* Email link for the bride */}
                      <a
                        href='https://wa.me/+19175703587'
                        className='icon'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-whatsapp'></i>
                      </a>
                      {/* WhatsApp link for the bride */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div
              className='item mb-30 animate-box'
              data-animate-effect='fadeInRight'
            >
              <div className='img'>
                <img src={Groom} alt='Groom' />
              </div>
              <div className='info valign'>
                <div className='full-width'>
                  <h6>
                    Johnny Diaz <i className='ti-heart'></i>
                  </h6>
                  <span>The Groom</span>
                  <p>
                  {/*Johnny was born and raised in NY and in the Dominican Republic*/}
                  </p>
                  <div className='social'>
                    <div className='full-width'>
                      <a
                        href='https://www.instagram.com/mrbullettproof/'
                        className='icon'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                      {/* Instagram link for the groom */}
                      <a
                        href='mailto:johnnyelvisjr@gmail.com'
                        className='icon'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='far fa-envelope'></i>
                      </a>
                      {/* Email link for the groom */}
                      <a
                        href='https://wa.me/+19179759860'
                        className='icon'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <i className='fab fa-whatsapp'></i>
                      </a>
                      {/* WhatsApp link for the groom */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div
            className='col-md-12 text-center animate-box'
            data-animate-effect='fadeInUp'
          >
            <h3 className='oliven-couple-title'>Are getting married!</h3>
            <h4 className='oliven-couple-subtitle'>
              September 7, 2024 — New York
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
