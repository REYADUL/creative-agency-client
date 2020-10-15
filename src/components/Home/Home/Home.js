import React from 'react';
import Companies from '../Companies/Companies';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';

const Home = () => {
    document.title = 'Home';
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Services></Services>

            <Portfolio></Portfolio>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;