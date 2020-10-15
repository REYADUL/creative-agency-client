import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    const {id,image, title, description } = service;


    return (
        <Link to={`/dashboard/${title}`} style={{ textDecoration: 'none' }} >
            <div className="card  display-item my-5" style={{ height: 250 }}>
                <div className="card-body">
                    <img src={image} alt="" style={{ height: '40px' }} />
                    <h3 className="text-dark">{title}</h3>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </Link>


    );
};

export default ServiceDetails;