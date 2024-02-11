import React, { Component } from "react";
import "../index.css" ;
import Banner from '../assets/Banner.webp';
import JudoThrow from '../assets/JudoThrows.webm'
import Competition from '../assets/Competition.webp'
import MuayThai from '../assets/MuayThai.webp'

export default function Home (){
  return(
      <>
        <div className="WelcomeBanner">
          <img src={Banner} alt="Large group photo of all gym members watching the Coach" className="Banner"/>
          <div  className="titleBlock">
            <h1 className="title">DANIEL GRACIE NORTHEAST</h1>
          </div>
        </div>

        <div className="MeetUs">
          <video src={JudoThrow} autoPlay muted loop className="MeetUsVid"/>
          <div className="MeetUsTxt">
          <h1 className="MeetusTxtTitle">Who We Are</h1>
            <p className="MeetusTxtBody">At Daniel Gracie NE, we are a family that work hard everyday to be better versions of ourselves!<br/>
            <br/> We strive to build and welcome people into our community no matter race, religion, or creed. Learn from a Judo Blackbelt, BJJ Blackbelt,
            and a Professional ex-Bellator fighter! Come in and train, free on us for the first day! Rather it be for self-defense, 
            self-improvement, if your an officer of the law, whatever it is we would love to have you! <br/>
            </p>
            <h1 className="MeetusTxtsubTitle">What we offer</h1>
            <p className="MeetusTxtBody">
              For children we offer BJJ classes 3x a week! They learn disipline, hard work, and a never quit attitude that everyone in life needs!
              <br/>
              These classes are from 6-7pm on Monday, Tuesday, and Wednesday
              <br/><br/>
              For Adults we offer both BJJ and Muay Thai classes.<br/>
              All classes are available for $150 per month. Over 14 hours!<br/>
              This subscription is valid at all Daniel Gracie gyms
            </p>
            </div>
        </div>

        <div className="Competition">
          <h1 className="CompTxt">We love to compete, but you dont have to!</h1>
          
          <div className="compPic">
            <a href="https://www.youtube.com/watch?v=ZtMhj4kBknU" target="_blank">
              <img className= 'indivCompPic' src={Competition} alt="Group of students discussing game plan for the upcoming matches"/></a>
            <a href="https://www.youtube.com/watch?v=qKuJNjEIXZU" target="_blank">
              <img className= 'indivCompPic' src={MuayThai} alt="2 People hitting boxing pads preparing"/>
            </a>
            </div>
        </div>
      </>
  );
}