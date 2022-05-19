import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPaper, faAngleLeft, faCaretRight, } from '@fortawesome/fontawesome-free-solid'
import html from './images/html5.jpeg'; 
import css from './images/CSS3.png'; 
import booststrap from './images/bootstrap.jpeg'; 
import react from './images/logo192.png'; 
import angular from './images/download.png'; 
import profilePicture from './images/Nothemba.jpeg'; 

import "./about.css"

function About() {
  return (
    <div >
        <h1 className='aboutHeading'>About me</h1>
        <div className='about__content drop__shadow'>
        <div className="profile__image">  
         <img src={profilePicture} alt="profile image" className='p__image'/>
         <p className='descr'>University IT graduate with desktop support and 2 years web development experience that strives for excellence in every task with a “can-do” mentality.<br/>
          A technology enthusiast, seeking an opportunity to add value to your company and gain some valuable experience.<br></br>

            Here are the technologies that i have been working with:</p>
        </div>
        <div className="profile__details">
          <p className='skills__headind'> Tech Skills</p>
           <p> Here are the technologies that i have been working with:</p>
            <div class="wrapper ">
                {/* <div> <FontAwesomeIcon className='caret' icon={faCaretRight} /> CSS</div>
                <div> <FontAwesomeIcon className='caret' icon={faCaretRight} />HTML</div>
                <div> <FontAwesomeIcon className='caret' icon={faCaretRight} />Bootstrap</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />Angular</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />React</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />JavaScprip</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />TypeScript</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />SQL</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />MongoDB</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />Docker</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />Node</div>
                <div><FontAwesomeIcon className='caret' icon={faCaretRight} />Express</div> */}

                <div>  <img src={html} alt="" className='logo'/></div>
                <div> <img src={css} alt="" className='logo'/></div>
                <div><img src={booststrap} alt="" className='logo'/> </div>
                <div><img src={angular} alt="" className='logo'/></div>
                <div><img src={react} alt="" className='logo'/></div>
                <div><img src={html} alt="" className='logo'/></div>
                <div><img src={booststrap} alt="" className='logo'/> </div>
                <div><img src={angular} alt="" className='logo'/></div>
                <div><img src={react} alt="" className='logo'/></div>
               
                </div>

            {/* <div className="skills">
                <h2>Current skills</h2>
            </div> */}
      
        </div>
        </div>
      
    </div>

  )
}

export default About