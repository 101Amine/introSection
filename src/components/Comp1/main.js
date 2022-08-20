import React from 'react';
import './main.css'
// import { Container } from './styles';
import headerImg from '../../assets/images/image-hero-desktop.png'
import MeetIcon from '../react-icons/sponsors/MeetIcon';
import MakerIcon from '../react-icons/sponsors/MakerIcon';
import DatabizIcon from '../react-icons/sponsors/DatabizIcon';
import AudiophileIcon from '../react-icons/sponsors/AudiophileIcon';
function Main() {
  return (
  <div className='Main'>

     <div className='left'>
        <div className='title'>
            Make remote work 
        </div>

        <div className='content'>
            Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and 
            watch productivity soar.
        </div>

        <div className='action'>
            <button className='btn'>
                <span>Learn more</span>
            </button>
        </div>

        <div className='sponsors'>
            
           <MeetIcon color={'hsl(0, 0%, 41%)'}/>
           <MakerIcon color={'hsl(0, 0%, 41%)'}/>
           <DatabizIcon color={'hsl(0, 0%, 41%)'}/>
           <AudiophileIcon color={'hsl(0, 0%, 41%)'}/>
        </div>

     </div >


     <div className='right'>
        <img className='imgRight' src={headerImg} alt='headerImage'/>
     </div >


  </div >
  )
  ;
}

export default Main;