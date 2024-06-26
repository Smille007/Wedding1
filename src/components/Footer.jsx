
import Logo from '..//assets/logo.png'
import 'run-parallel';

function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Daryna <small>&</small> Johnny
                </span>
              </a>
            </h2>
            <p className='copyright'>September 7, 2024 – New York</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
