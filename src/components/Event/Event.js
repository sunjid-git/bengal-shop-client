import React from 'react';
import { Link } from 'react-router-dom';
import './Event.css'
const Event = ({event}) => {

    return (

    <div className="col-md-4">
        <div class="card m-2 rounded">
            <img className="p-4 imgSize" src={event.imageURL}  alt=""/>
            <div class="card-body">
                <h6 className="text-center">{event.name} - {event.weight}</h6>
                <h5 className="card-title text-center pt-3">
                     <div className="d-flex justify-content-around">
                         <h3> ${event.price} </h3>
                         <button className="rounded ml-3">
                            <Link to={`/login`}>  
                                <strong>Buy Now</strong>
                            </Link> 
                         </button>
                     </div>
                </h5>
            </div>
        </div>
    </div>

    );
};

export default Event;