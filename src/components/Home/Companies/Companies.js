import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';


const Companies = () => {
    return (
       
            <section className="d-flex justify-content-center m-5 pb-5 pt-5">
                <div>
                    
                    <img className='col-lg-2 col-md-4' src={slack} alt="" style={{ height: '50px' }} className="mr-5" />
                    <img className='col-lg-2 col-md-4' src={airbnb} alt="" style={{ height: '50px' }} className="mr-5" />
                    <img className='col-lg-2 col-md-4' src={uber} alt="" style={{ height: '50px' }} className="mr-5" />
                    <img className='col-lg-2 col-md-4' src={google} alt="" style={{ height: '50px' }} className="mr-5" />
                    <img className='col-lg-2 col-md-4' src={netflix} alt="" style={{ height: '50px' }} className="mr-5" />
                </div>
            </section>
       
    );
};

export default Companies;