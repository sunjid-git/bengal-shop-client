import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Event from '../Event/Event';
import spinner from '../../images/spinner.gif'
const Home = () => {
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5055/events')
        .then(res => res.json())
        .then(data => 
            {
                setEvents(data)
                setLoading(false)
            })
    },[])
    return (
        <div className="container">
           
            <div className="row">
               {
                loading ? <img src={spinner} alt=""/> : events.map( event => <Event event={event}></Event> )
               }
            </div>
        </div>
    );
};

export default Home;