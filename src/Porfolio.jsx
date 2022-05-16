import React from 'react'
import { Slash } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faHandPaper, faAngleLeft, faAngleRight, } from '@fortawesome/fontawesome-free-solid'
import './Portfolio.css'
function Porfolio() {
  return (
    <div className='container'>
        <div className='home'>
         <div className='greet'> 
         <FontAwesomeIcon className='hand' icon={faHandPaper} />
         <p className='greeting'>Hi, my name is </p></div>
     
         <div className='name'>
         <h2 className='myName'>Nothemba Tsheme</h2>
         <h1 className=''>   <FontAwesomeIcon className='angle' icon={faAngleLeft} /> I’ m a full stack developer < Slash className="ml-4 slash"/> <FontAwesomeIcon className='angle' icon={faAngleRight} /></h1>
         <p class="info">
         I am full stack web developer, my focus is to build end to end user friendly, accessable and reponsive applications at Digital Academy.
         </p>
         </div>
         <button className='download btn btn-large'>Click to download my CV</button>
        
        </div>
      
     
    </div>
  )
}

export default Porfolio