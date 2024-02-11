import React, { Component } from "react";
import "../index.css";

export default function Login (){
  return(
      <><div>
        <h1>Login Page</h1>
        <form>
          <label>Phone Number: </label>
          <input type='number' name='number'></input>
          <label>Password: </label>
          <input type="password" name="password"></input>
          <button >Log in</button>
        </form>
        <a href='/signup'>
          <button>Sign Up</button>
        </a>
      </div></>
  );
}