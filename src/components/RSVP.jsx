import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function RSVP({ backendUrl, onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    guests: '',
    msg: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      console.log('Submitting to URL:', `${backendUrl}/rsvp`);
      const response = await axios.post(`${backendUrl}/rsvp`, formData);
      console.log('RSVP submitted:', response.data);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        guests: '',
        msg: ''
      });
      if (onSubmit) {
        onSubmit(response.data);
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setError(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div id='rsvp' className='section-padding bg-img bg-fixed'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            <span className='oliven-title-meta text-center'>Will you attend?</span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            {!submitSuccess ? (
              <form onSubmit={handleSubmit} className='row'>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Full Name'
                      name='fullName'
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <input
                      type='number'
                      className='form-control'
                      placeholder='Guests (total number of guests including yourself)'
                      name='guests'
                      value={formData.guests}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <textarea
                      name='msg'
                      id='message'
                      cols='30'
                      rows='7'
                      className='form-control'
                      placeholder='Message'
                      value={formData.msg}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='form-group'>
                    <input type='submit' className='btn buttono' value='SEND' />
                  </div>
                </div>
              </form>
            ) : (
              <div className='col-md-12'>
                <div className='form-group'>
                  <div className="success-message">
                    <p>Thank you for your RSVP!</p>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className='col-md-12'>
                <div className='form-group'>
                  <div className="error-message">
                    <p>Error: {error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

RSVP.propTypes = {
  backendUrl: PropTypes.string.isRequired,
  onSubmit: PropTypes.func
};

export default RSVP;