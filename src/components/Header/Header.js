import React from 'react';
import './Header.css';

const Header = props => {
    console.log(props);
    return (
        <div>
            <div className='header'>
                <h1 >Hire Developers for Your Project</h1>
                <h3>Total Budget: $200000</h3>
                
            </div>
        </div>
    );
};

export default Header;