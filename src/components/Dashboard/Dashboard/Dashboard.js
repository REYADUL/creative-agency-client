import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {title}=useParams();

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


                    <div className="col-md-6 pt-3" style={{backgroundColor:'gray',height:'800px'}}>
                       
                        <form action="">

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder='your name/company name' />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" value={loggedInUser.email} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" value={title} placeholder=" " />
                            </div>
                            <div className="form-group">
                                <textarea name="text" className="form-control" id="" cols="12" rows="5" placeholder="project details"></textarea>
                            </div>
                            <div className="form-group">
                                <textarea  name="number" className="form-control" id=""  placeholder="price "></textarea>
                            </div>
                            <div className="form-group">
                              <Link to={`/serviceList/${title}`}> <button type="button" className="btn btn-dark mt-3"> Submit </button> </Link> 
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>

        
    );
};

export default Dashboard;