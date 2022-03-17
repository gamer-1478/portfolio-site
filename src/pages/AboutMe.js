//Copyright © 2020 Aayush Garg. All rights reserved.
//Author Gamer-1478

import React from 'react';
import './aboutMe.css';

function AboutMe() {

  window.onscroll = function () { show() };

  function show() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("aboutme-container").style.opacity = 1;
      document.getElementById('aboutme-img-carasol').style.opacity = 1;
      document.getElementById('line-about').style.width = '20vw';
    } if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
      document.getElementById("project-container").style.opacity = 1;
      document.getElementById('line-project').style.width = '20vw';
    }
  }

  return (
    <div id='aboutme' className='Aboutme-root'>
      <div>
        <h1 className='aboutme-header'>About me</h1>
      </div>
      <div className='ohk-root'>
        <div id='aboutme-container' className='aboutme-container'>
          <p className='aboutme-connect-dots' style={{ fontSize: '1.3rem', color: '#2B1D6D' }}>Connecting the dots</p>
          <div className='line-effect-about'>
            <span id='line-about' className='line-about'></span>
            <span className='circle-about'></span>
          </div>
          <h2 style={{ padding: '1vw 0vw 1vw 0vw', fontSize: '2.5rem', fontWeight: '300' }}>Hi there!</h2>
          <div className='about-main-content'>
            <p>I am Anirudh Chaturvedi, a high school senior and the Vice Head Boy
              at Amity International school sector-46.</p><br></br>

            <p>I've always been very passionate to explore different fields and take
              up various co-curricular activities other than academics. I love doing
              video editing, especially motion graphics and graphic designing as a
              passion. I am also a core-member of Tech Syndicate, the technology
              organization and the secretary of Cyber Congress of my school.</p><br></br>

            <p>Being a fitness enthusiast I actively take up long distance cycling and
              running. Check out my strava profile for more and follow:)</p><br></br>

            <p>Music has always been an inseparable part of my life, I am a guitarist
              and currently pursuing music studies from Trinity college London.
              Fun fact I'm also a melomaniac, my taste in music ranges from
              pop rock to blues to jazz to country music. I am a huge fan of John Mayer!</p>
            <br></br>
            <p>I love to travel, watch videos and read about armed forces, write poems,
              watch movies and web-series and talk to people! </p>
            <br></br>
            <br></br>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} id='aboutme-img-carasol' className='aboutme-img-carasol'>
          <img style={{ marginTop: '20px', height: '600px' }} alt='img' src='https://cdn.discordapp.com/attachments/840934970548813854/953882671245840414/Group_10.png' />
        </div>
      </div>
    </div >
  )
}

export default AboutMe