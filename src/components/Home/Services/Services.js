import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        id: 1,
        image: 'https://i.ibb.co/8xZpYLp/service1.png',
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
    },
    {
        id: 2,
        image: 'https://i.ibb.co/0h6HRD6/service2.png',
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
    },
    {
        id: 3,
        image: 'https://i.ibb.co/DMjkhBX/service5.png',
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
    }



]

const Services = () => {
    return (
        <div className="container text-center mt-5">
            <h1 className="m-5">Provide awesome <span style={{ color: '#7AB259' }}>services</span></h1>



           

            <div className="d-flex">
                {
                    serviceData.map(service =><ServiceDetails service={service} key={service.id}></ServiceDetails>)
                }
            </div>

        </div>
    );
};

export default Services;