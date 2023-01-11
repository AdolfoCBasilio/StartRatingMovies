import React from 'react';
import './styles.css';
export const Header = () => {
    const handleClick = () => {
        alert('AdolfoMovies');
    }
    return (
        <header className="header">
            <div className="header__left">
                <h1>AdolfoCBGMovies</h1>
            </div>
            <div className="header__right">
                <button className='header__boton' onClick={handleClick}>Salir</button>
            </div>
        </header>
    );
};

