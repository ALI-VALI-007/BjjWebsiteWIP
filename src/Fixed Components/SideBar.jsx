import { useState } from 'react'
import '../index.css'
import logo from '../assets/logo.webp'

function SideBar() {
  return(
    <>
        <div className="NavBar">
          <a href="/home"><img src={logo} alt="Daniel Gracie Brazilian Jiu Jitsu Logo" className="logo"></img></a>
          <a href='/'>
            <button className='navButton'>HOME</button>
          </a>
          {/*<a href='/login'>
            <button>Login</button>
          </a>*/}
          {/*<a href='/Info'>
            <button>More Info</button>
          </a>*/}
          <a href='/Schedule'>
            <button className='navButton'>SCHEDULE</button>
          </a>
        </div>
    </>
  );
}

export default SideBar;