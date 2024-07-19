import React, { useState } from 'react';
import axios from 'axios';
import Bridegroom from './components/Bridegroom.jsx';
import Countdown from './components/Countdown.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Organization from './components/Organization.jsx';
import RSVP from './components/RSVP.jsx';
import Seeyou from './components/Seeyou.jsx';
import Sidebar from './components/Sidebar.jsx';
import Story from './components/Story.jsx';
import Where from './components/Where.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const backend = import.meta.env.BACKEND_URL || "http://localhost:4005";
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRSVPSubmit = async (formData) => {
    try {
      const response = await axios.post(`${backend}/rsvp`, formData);
      console.log('rsvp submitted:', response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting rsvp:', error);
    }
  };

  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Organization />
        <Gallery />
        <Where />
        {isSubmitted ? (
          <div className="thank-you-message">
            <h2>Thank You for Your RSVP!</h2>
            <p>We look forward to seeing you at the wedding.</p>
          </div>
        ) : (
          <RSVP backendUrl={backend} onSubmit={handleRSVPSubmit} />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
