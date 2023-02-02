import React from 'react';

const JourneyListCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div>
            <div>

            </div>
            <div className={`card text-white p-6 shadow-xl flex flex-col text-left ${bgClass}`}>
                <div> <figure><img src={icon} alt="Movie" /></figure></div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default JourneyListCard;
