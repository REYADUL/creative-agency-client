import React from 'react';

const FeedBackDetails = ({details}) => {
    const { id,image,name,title,review } = details;
    return (
        <div className="card m-5">
            <div className="mt-5 d-flex  align-items-center">
                <img className=" rounded-circle w-25" src={image} alt="" />
                <div>
                    <h6>{name}</h6>
                    <p >{title}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">{review}</p>
            </div>
        </div>
    );
};

export default FeedBackDetails;