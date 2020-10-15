import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';


const Navbar = () => {
    return (
        <div className="col-md-10 offset-md-1">
            <nav className="navbar navbar-expand-lg navbar-light pt-3">
                <a className="navbar-brand" href="/"><img src={logo} alt="" class="img-fluid w-25" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link to="/" class="nav-link   mr-4">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/" class="nav-link   mr-4">Our Portfolio</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/" class="nav-link   mr-4">Our Team</Link>
                        </li>

                        <li class="nav-item">
                            <Link to="/" class="nav-link   mr-4">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="login" class="nav-link   mr-4" className="btn btn-dark">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;