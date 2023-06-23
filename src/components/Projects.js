import React from 'react'
import '../styles/projects.css'

function Gallery() {
  return (
    <div className="grid-container">
      <div className="project">
        <a href='https://github.com/tsoysal/earthquake-app' target='_blank' rel='noreferrer'>
          <div className='imageHolder project1'></div>
          <span>React JS</span>
          <h3>Turkey Last Earthquakes</h3>
        </a>
      </div>
      <div className="project">
        <a href='https://github.com/tsoysal/pomodoro-timer' target='_blank' rel='noreferrer'>
          <div className='imageHolder project2'></div>
          <span>html-css-javascript</span>
          <h3>Pomodoro Timer</h3>
        </a>
      </div>
      <div className="project">
        <a href='https://github.com/tsoysal/hostel-web-site' target='_blank' rel='noreferrer'>
          <div className='imageHolder project3'></div>
          <span>Html-Sass</span>
          <h3>Hotel Web Site</h3>
        </a>
      </div>
      <div className="project">
        <a href='https://github.com/tsoysal/spotify-clone' target='_blank' rel='noreferrer'>
          <div className='imageHolder project4'></div>
          <span>html-css-javascript</span>
          <h3>Spotify Clone</h3>
        </a>
      </div>
      <div className="project">
        <a href='https://github.com/tsoysal/Team_page' target='_blank' rel='noreferrer'>
          <div className='imageHolder project5'></div>
          <span>html-css</span>
          <h3>Team Page</h3>
        </a>
      </div>
      <div className="project">
        <a href='https://github.com/tsoysal/hotel-peracity-website' target='_blank' rel='noreferrer'>
          <div className='imageHolder project6'></div>
          <span>html-Sass</span>
          <h3>Hotel Web Site</h3>
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="container" id='projects-section'>
      <h2 className='section-heading'>&lt;h1&gt;Projects&lt;/h1&gt;</h2>
      <h2 className='section-heading'>&lt;!-- Here some of my projects --&gt;</h2>
      <Gallery />
    </div>
  )
}

export default Projects
