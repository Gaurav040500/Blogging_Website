"use client";
import React from 'react';
import './login.css'; // Import the CSS file

const Page = () => {

    const handleClick = () => {
        alert("clicked");
    };

    return (
        <div className='main'>
            <div className='container'>
                <div className='input-css'>
                    <label>
                        Name:
                        <input type='text' placeholder='Enter Your Name...' />
                    </label>
                    <label>
                        E-Mail:
                        <input type='text' placeholder='Mail?' />
                    </label>
                    <label>
                        Password:
                        <input type='password' placeholder='Password?' />
                    </label>
                    <button onClick={handleClick}>Submit</button>
                    <p>Not having an account? <a href="url">SignUp</a></p>
                </div>
            </div>
        </div>
    );
}

export default Page;
