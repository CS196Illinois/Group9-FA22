import React, {useState} from 'react';
import './SpotifyLogin.css';
import './index.css';
import './App.css';
import './spotify.png';

const SpotifyLogin = () => {
    
    const handleClick = () => {
        console.log("clicked"); 
        //to do 
    }

    return (
        <section className='SpotifyLogin'>
            <button
                onClick={handleClick} > log in with spotify
            </button>
        </section>
    );
}

export default SpotifyLogin;