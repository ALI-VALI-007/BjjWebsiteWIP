import { useState } from 'react'
import '../index.css'
import instagram from '../assets/ig.webp'
import facebook from '../assets/facebook.webp'
import ContactForm from './ContactForm.jsx'

export default function Footer() {
    return(
      <>
          <div className='Footer'>
            <a href='https://www.instagram.com/danielgracienortheast/' target='_blank'>
              <img src={instagram} alt="Instagram @danielgracienortheast" className="logo"></img>
            </a>
            <a href='https://www.facebook.com/dgnortheast.philly/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target='_blank'>
              <img src={facebook}></img>
            </a>
            <h2>2614 Rhawn St. Philadelphia, PA 19115</h2>
            <h3>Contact Us!</h3>
            <h3>info@danielgraciephiladelphia.com</h3>
            <h3>(267) 235-2613</h3>
          </div>
          {/*<ContactForm />*/}
      </>
    );
  }