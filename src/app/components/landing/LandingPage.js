// app/landingpage/page.js
"use client"; 
import React from 'react';
import './landingpage.css'

const Landingpage = () => {

    const handleSearch = () => {
        alert("clicked");
    };

    return (
        <div>
            <div className='text-button'>
                <input type='text' placeholder='Where are you visiting...' className='text'/>
                <button onClick={handleSearch} className='button'>Search</button>
            </div>
            <div>
                <h3>Discover your new favourite place</h3>
                {/* Corrected image path */}
                <div>
                <img src="/Images/photo1.png" alt="Beautiful scenery" />
                <img src="/Images/photo2.png" alt="Beautiful scenery"  style={{marginLeft:"8px"}}/>
                </div>

            </div>
        </div>
    );
};

export default Landingpage;
