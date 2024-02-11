/*App.js*/
import React, { Component } from "react";
import "./Hub.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SideBar from './Fixed Components/SideBar.jsx';
import Footer from './Fixed Components/Footer.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import Schedule from './pages/Schedule.jsx'

export default function Hub () {
    return (
        <><div>
            <Router>
            <SideBar />
                <Routes>
                    <Route main element={<Home/>} />
                    <Route path="*" element={<Home/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/Schedule" element={<Schedule/>} />
                </Routes>
            <Footer />
            </Router>
        </div></>
    );
}