//Copyright © 2020 Aayush Garg. All rights reserved.
//Author Gamer-1478

import React from 'react'
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
                        <div className='line-effect'>
                            <span id='line-project' className='line-project'></span>
                            <span className='circle-project'></span>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Projects