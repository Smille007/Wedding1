
import React, { useEffect } from 'react';

function Countdown() {
  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    let birthday = "Sep 7, 2024 00:00:00",
        countDown = new Date(birthday).getTime();
    
    const x = setInterval(function() {    
      const now = new Date().getTime(),
            distance = countDown - now;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("headline").innerText = "It's our wedding!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
      } else {
        document.getElementById("days").innerText = Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4>We will become a family in</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'></span>Days
              </li>
              <li>
                <span id='hours'></span>Hours
              </li>
              <li>
                <span id='minutes'></span>Minutes
              </li>
              <li>
                <span id='seconds'></span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="content" style={{ display: 'none' }}>
        <h2 id="headline"></h2>
      </div>
    </div>
  );
}

export default Countdown;









// import { useEffect } from 'react'


// function Countdown () {
//   useEffect(() => {
//     (function () {
//       const second = 1000,
//             minute = second * 60,
//             hour = minute * 60,
//             day = hour * 24;
//       let birthday = "Sep 7, 2024 00:00:00",
//           countDown = new Date(birthday).getTime(),
//           x = setInterval(function() {    
//             let now = new Date().getTime(),
//                 distance = countDown - now;
    
//             document.getElementById("days").innerText = Math.floor(distance / (day));
//             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
//             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
//             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
    
//             //do something later when date is reached
//             if (distance < 0) {
//               let headline = document.getElementById("headline"),
//                   countdown = document.getElementById("countdown"),
//                   content = document.getElementById("content");
    
//               headline.innerText = "It's our wedding!";
//               countdown.style.display = "none";
//               content.style.display = "block";
    
//               clearInterval(x);
//             }
//             //seconds
//           }, 1000);
//           return null;
//       }());
//   }, [])
//   return (
//     <div
//       id='countdown'
//       className='section-padding bg-img bg-fixed'
//       data-background='images/banner-1.jpg'
//     >
//       <div className='container'>
//         <div className='row'>
//           <div className='section-head col-md-12'>
//             <h4>We will become a family in</h4>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-md-12'>
//             <ul>
//               <li>
//                 <span id='days'></span>Days
//               </li>
//               <li>
//                 <span id='hours'></span>Hours
//               </li>
//               <li>
//                 <span id='minutes'></span>Minutes
//               </li>
//               <li>
//                 <span id='seconds'></span>Seconds
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Countdown
