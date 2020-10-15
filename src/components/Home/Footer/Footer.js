import React from 'react';

const Footer = () => {
    return (
        <div className="container mt-5 pb-5" style={{ backgroundColor: '#FBD062' }}>
            <div className="row">
                <div className="col-lg-4 col-md-12 offset-md-1 mt-5 ">
                    <h2 className="font-weight-bold">Let Us Handle Your <br /> Project,  Professionally.</h2>
                    <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sapiente?.</p>

                </div>
                <div className="col-lg-6 col-md-11 mt-5 ml-5">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your email address " />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name / company’s name " />
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="12" rows="10" placeholder="Your message "></textarea>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-dark mt-3"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="mt-5 pt-5 text-center"><small>Copyright Orange Labs 2020</small></p>
        </div>
    );
};

export default Footer;