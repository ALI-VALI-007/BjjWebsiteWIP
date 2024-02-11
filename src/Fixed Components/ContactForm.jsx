import { useState } from 'react'
import '../index.css'

export default function ContactForm() {
    return(
      <>
          <div>
            <form>
                <label>
                    Email/Phone Number:
                    <input type='text' ></input>
                </label>
                <label>
                    Name:
                    <input type='text' ></input>
                </label>
                <label>
                    Message:
                    <input type='password' ></input>
                </label>
            </form>
          </div>
      </>
    );
  }
  
