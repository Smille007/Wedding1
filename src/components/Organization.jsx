import 'run-parallel';

function Organization () {
  return (
    <div id='organization' className='organization section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Wedding</span>
            <h2 className='oliven-title'>Organization</h2>
          </div>
        </div>
        <div className='row bord-box bg-img' data-background='images/slider.jpg'>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>01</h2>
            <h6 className='title'>Ceremony</h6>
            <p>
                {/*need more details, it's a church ceremony*/}
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>02</h2>
            <h6 className='title'>Cocktail Hour</h6>
            <p>
                {/*need more details*/}
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>03</h2>
            <h6 className='title'>Party</h6>
            <p>
                {/*need more details*/}
            </p>
          </div>
          <div className='col-md-3 item-box'>
            <h2 className='custom-font numb'>04</h2>
            <h6 className='title'>Cake Cutting</h6>
            <p>
              {/*need more details*/}
              
            

            
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
