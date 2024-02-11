import React, { Component } from "react";
import "../index.css" ;
import SchedulePicture from '../assets/Schedule.webp';

export default function Home (){
  return(
      <>
      <div className="flexBox">
        <img className="Schedule" src={SchedulePicture} alt="a"/>
      </div>
      </>
  );
}