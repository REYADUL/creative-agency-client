import React from 'react';
import logo from '../../../images/logos/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                        <div className="form-group">
                            <input type="text" className="form-control" value='' placeholder="name/company name" />
                        </div>
                        <div className="form-group">
                            <input name="number" className="form-control" id="" value={loggedInUser.email}/>
                        </div>
                        <div className="form-group">
                            <textarea name="text" className="form-control" id="" cols="12" rows="5" placeholder="review"></textarea>
                        </div>
                        
                        <div className="form-group">
                              <Link > <button type="button" className="btn btn-dark mt-3"> Submit </button> </Link> 
                        </div>

                           
                </div>

            </div>





        </div>
        </div >
    )
};

export default Review;