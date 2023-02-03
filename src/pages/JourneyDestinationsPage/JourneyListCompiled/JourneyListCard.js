import React from 'react';
import { Link } from 'react-router-dom';

const JourneyListCard = ({ card }) => {
    const { name, description, icon, month } = card;
    return (
        <div className=''>
            <div>

            </div>
            <div className={`card text-accent p-6 shadow-xl flex flex-col text-left`}>
                <div> <figure><img src={icon} alt="Movie" /></figure></div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <Link to={`/journey-destinations/${month}`}><button className='btn btn-primary'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JourneyListCard;
