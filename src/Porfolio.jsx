import React from 'react'
import { Slash } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandPaper, faAngleLeft, faAngleRight, } from '@fortawesome/fontawesome-free-solid'
import About from './About';
import './Portfolio.css'
function Porfolio() {
  return (
    <div className='container'>
        <div className='home'>
         <div className='greet'> 
         <p className=' greeting'> Hi, my name is </p>
         <h2 className=' myname'>Nothemba Tsheme,</h2>
         </div>
         <div className='name'>
         <h1 className='typing'>  <FontAwesomeIcon className='angle' icon={faAngleLeft} />  I’ m a full stack developer.< Slash className="ml-4 slash"></Slash><FontAwesomeIcon className='angle' icon={faAngleRight} /></h1>
         <p className="info fadein">
         I am full stack web developer, my focus is to build end to end user friendly, accessable and reponsive applications at Digital Academy.
         </p>
         </div>
         <button className='download fadein'> Download my CV</button>
        </div>
        <About/>
         
    </div>
  )
}

export default Porfolio