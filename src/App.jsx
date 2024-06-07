import React, { useState } from 'react';
import axios from 'axios';
import Bridegroom from './components/Bridegroom.jsx';
import Countdown from './components/Countdown.jsx';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Header from './components/Header.jsx';
import Organization from './components/Organization.jsx';
import RSVP from './components/RSVP.jsx'
import Seeyou from './components/Seeyou.jsx';
import Sidebar from './components/Sidebar.jsx';
import Story from './components/Story.jsx';
import Where from './components/Where.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'






function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRSVPSubmit = async (formData) => {
    try {
      const response = await axios.post('https://wedding-back-atc8.onrender.com/rsvp', formData);
      console.log('RSVP submitted:', response.data);
      setIsSubmitted(true); // Set state to true after successful submission
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      // Handle error (e.g., show an error message)
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
        {isSubmitted ? ( // Render ThankYou component if RSVP is submitted
          <ThankYou />
        ) : ( // Render RSVP component if RSVP is not yet submitted
          <RSVP onSubmit={handleRSVPSubmit} />
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
