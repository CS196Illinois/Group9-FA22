import React, {useState} from 'react';
import './SpotifyLogin.css';

const SpotifyLogin = () => {
    
    const handleClick = () => {
        console.log("clicked"); 
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