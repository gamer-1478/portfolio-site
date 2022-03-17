//Copyright © 2020 Aayush Garg. All rights reserved.
//Author Gamer-1478

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

var linkedin = 'https://www.linkedin.com/in/AnirudhChaturvedi07/';
var twitter = 'https://twitter.com/graphtech_07';
var youtube = 'https://www.youtube.com/c/Anirudhchaturvedi?sub_confirmation=1';
var behance = 'https://www.behance.net/anirudhchaturv';
var spotify = 'https://open.spotify.com/user/5xwe4nrprj47osrjvrpq1ja5y?si=00e788dbe2f94653&nd=1';
var strava = 'https://www.strava.com/athletes/80762754';

const openNewTab = (url) => {
    window.open(url, '_blank');
}

function Footer() {
    return (
        <div className='footer-container'>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            © Anirudh Chaturvedi
                        </Link>
                    </div>
                    <small style={{display:'flex'}} className='website-rights'>Developed With 💖 By &nbsp;<div style={{ cursor: 'pointer', bottom: '0' }} onClick={() => openNewTab('https://aayushgarg.net')}>Aayush Garg</div></small>
                    <div style={{ marginLeft: '-35px' }} className='social-icons'>
                        <img style={{ width: '35px' }} alt='LinkedIn Logo' onClick={() => openNewTab(linkedin)} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png' />
                        <img style={{ width: '35px' }} alt='Twitter Logo' onClick={() => openNewTab(twitter)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865397797539860/twitter.png' />
                        <img style={{ width: '35px' }} alt='Youtube Logo' onClick={() => openNewTab(youtube)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865398464430080/movie.png' />
                        <img style={{ width: '35px' }} alt='Behance Logo' onClick={() => openNewTab(behance)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865397973712896/behance.png' />
                        <img style={{ width: '35px' }} alt='Spotify Logo' onClick={() => openNewTab(spotify)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865398728683540/spotify.png' />
                        <img style={{ width: '35px' }} alt='Strava Logo' onClick={() => openNewTab(strava)} src='https://cdn-images-1.medium.com/max/1200/1*fnPVSaFGoh-NO_IPFrSoaQ.png' />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;