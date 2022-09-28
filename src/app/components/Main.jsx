import React from 'react';
import NavBar from './NavBar';

const Main = () => {
    return (
        <>
            <div className='bg'></div>
            <div className='block'>
                <header className='top'>
                    <NavBar />
                </header>

                <div className='main-text'>
                    <p>Capsule Collection</p>
                </div>
            </div>
        </>
    );
};

export default Main;
