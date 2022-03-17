import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Index.css'
import { HashLink, NavHashLink } from 'react-router-hash-link';

import AboutMe from './AboutMe';

function Index() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    var linkedin = 'https://www.linkedin.com/in/AnirudhChaturvedi07/';
    var twitter = 'https://twitter.com/graphtech_07';
    var youtube = 'https://www.youtube.com/c/Anirudhchaturvedi?sub_confirmation=1';
    var behance = 'https://www.behance.net/anirudhchaturv';
    var spotify = 'https://open.spotify.com/user/5xwe4nrprj47osrjvrpq1ja5y?si=00e788dbe2f94653&nd=1';
    var strava = 'https://www.strava.com/athletes/80762754';

    const openNewTab = (url) => {
        window.open(url, '_blank');
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();
    }, []);

    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div>
                    <nav className="navbar">
                        <div className="navbar-container">
                            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                                <img alt='logo' src='https://cdn.discordapp.com/attachments/840934970548813854/953648319928864788/Watermark.png' />
                            </Link>

                            <div className='menu-icon' onClick={handleClick}>
                                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                            </div>

                            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav-item'>
                                    <NavHashLink smooth to='/#aboutme' className='nav-links' onClick={() => { closeMobileMenu() }}>
                                        About
                                    </NavHashLink>
                                </li >
                                <li className='nav-item'>
                                    <NavHashLink smooth to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                                        Projects
                                    </NavHashLink>
                                </li>
                                <li>
                                    <HashLink to='/notes'
                                        className='nav-links-mobile' onClick={closeMobileMenu}>
                                        Resume
                                    </HashLink>
                                </li>
                            </ul>
                            <div style={{ paddingRight: '30px' }}>{button && <button className='btn--outline'>Resume</button>}</div>
                        </div>
                    </nav>
                </div>
                <div style={{ minHeight: 'calc(100vh - 80px)' }} className='herosection-main'>
                    <div className='herosection-container'>
                        <div className='herosection-content'>
                            <div className='namaste'>
                                <h4 style={{ opacity: '80%', position: 'absolute', fontSize: '3rem', fontWeight: '400' }}>namaste.</h4>
                                <h1 style={{ opacity: '100%', color: '#E4EDF3', fontSize: '7rem' }}>NAMASTE.</h1>
                            </div>
                            <h2 style={{ marginLeft: '-35px', fontSize: '4rem', fontWeight: '300' }}>Anirudh Chaturvedi</h2>
                            <div style={{ marginLeft: '-35px' }} className='social-container'>
                                <img style={{ width: '35px' }} alt='LinkedIn Logo' onClick={() => openNewTab(linkedin)} src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png' />
                                <img style={{ width: '35px' }} alt='Twitter Logo' onClick={() => openNewTab(twitter)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865397797539860/twitter.png' />
                                <img style={{ width: '35px' }} alt='Youtube Logo' onClick={() => openNewTab(youtube)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865398464430080/movie.png' />
                                <img style={{ width: '35px' }} alt='Behance Logo' onClick={() => openNewTab(behance)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865397973712896/behance.png' />
                                <img style={{ width: '35px' }} alt='Spotify Logo' onClick={() => openNewTab(spotify)} src='https://cdn.discordapp.com/attachments/840934970548813854/953865398728683540/spotify.png' />
                                <img style={{ width: '35px' }} alt='Strava Logo' onClick={() => openNewTab(strava)} src='https://cdn-images-1.medium.com/max/1200/1*fnPVSaFGoh-NO_IPFrSoaQ.png' />
                            </div>
                        </div>
                        <img style={{ width: '500px' }} alt='gr9' src='https://cdn.discordapp.com/attachments/840934970548813854/953644242750832690/Group_9.png'></img>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <p style={{ display: 'flex', left: '50', bottom: '0', marginBottom: '1px' }}>Developed With 💖 By &nbsp;<div style={{ cursor: 'pointer', bottom: '0' }} onClick={() => openNewTab('https://aayushgarg.net')}>Aayush Garg</div></p>
            </div>
            <AboutMe></AboutMe>
        </>
    )
}

export default Index