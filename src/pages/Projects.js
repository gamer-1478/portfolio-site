//Copyright © 2020 Aayush Garg. All rights reserved.
//Author Gamer-1478

import React from 'react'
import Cards from '../card/Cards'
import './Projects.css'

function Projects() {

    return (
        <div style={{ minHeight: '100vh' }}>
            <div id='projects' className='project-root'>
                <div>
                    <h1 className='project-header'>Projects</h1>
                </div>
                <div className='project-ohk-root'>
                    <div id='project-container' className='project-container'>
                        <p className='project-connect-dots' style={{ fontSize: '1.3rem', color: '#2B1D6D' }}>Expressing it all out through videos </p>
                        <div className='line-effect-project'>
                            <span id='line-project' className='line-project'></span>
                            <span className='circle-project'></span>
                        </div>
                        <Cards />
                        <div onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth"
                            });
                        }} className='back-to-top' style={{ textAlign: 'center' }}>
                            <div className='font-arrow'>
                                <img alt='arr' src='https://cdn.discordapp.com/attachments/840934970548813854/953980325376188466/Polygon_1.png' />
                            </div>
                            <h2 style={{ color: '#3A5A84', fontWeight:'300' }}>~Keeping it short and simple~<br></br>Back to the top</h2>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Projects