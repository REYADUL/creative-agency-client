import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../images/logos/logo.png';
import logo1 from '../../images/google.png';
import './Login.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.Config';

const Login = () => {
    document.title='login page';
    const [logeedInuser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn=(e)=>{
        e.preventDefault();
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log('working');
        firebase.auth().signInWithPopup(provider)

            .then(res => {
                console.log(res);
                const { displayName, email } = res.user;
                const signedInUser = {
                    name: displayName,
                    email: email
                };
                setLoggedInUser(signedInUser);
                storeAuthToken();

                console.log(signedInUser);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
            }).catch(function (error) {
                // Handle error
            });
    }

    
    return (



       
        <div class="loginBackground">
        <div className="container">
            <div className="Logo">
                <img className='w-25' src={logo} alt="" />
            </div>

            <div className="row">
                <div className="col-md-3">

                </div>

                <div className="col-md-6">
                    <form onSubmit={handleGoogleSignIn} class="login-form">
                        <h3 class="mb-3">Google Sign In </h3>
                        <div className="loginButton">
                            <button type='submit'><img src={logo1}  alt="" /> Continue with Google</button>

                        </div>
                        <p>Don't have an account? <Link to="/login">Create an Account</Link></p>
                    </form>
                </div>

                <div className="col-md-3">

                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;