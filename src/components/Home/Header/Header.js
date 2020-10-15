import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container" style={{backgroundColor:'#FBD062',borderRadius:' 0 85%  85%/30% 0'}}>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;