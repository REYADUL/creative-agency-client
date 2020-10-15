import React from 'react';
import logo from '../../../images/logos/logo.png';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { title } = useParams();
    return (
        <div>
            <div className="container-fluid">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a href="/home"><img class="img-fluid w-25" src={logo} alt="" /></a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <Link to="/" class="nav-link" style={{ color: "red" }}>{loggedInUser.name}</Link>
                            </li>
                        </ul>

                    </div>
                </nav>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>

                    <div className="col-md-6">
                    <p>order list</p>
                        <div className="d-flex row">
                            <div className="col-lg-6">
                                
                                <div class="card">
                                <div class="card-body">{title}</div>
                            </div>

                            </div>
                        </div>

                    </div>

                </div>




            </div>
        </div>
    );
};

export default ServiceList;