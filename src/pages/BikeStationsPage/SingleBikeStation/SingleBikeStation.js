import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';

const SingleBikeStation = ({ bikeStation }) => {
    const { _id, name, nimi_finnish, osite } = bikeStation;

    return (
        <div className="w-full lg:w-1/2 md:w-1/2 p-6 md:card-side shadow-xl mb-6 lg:mb-0">
            <h1 className='text-center font-semibold text-'>Station</h1>

            <div className="card-body text-left">
                <div className='h-12'>
                    <h3 className="card-title text-lg font-semibold">Name: {name}</h3>
                    <h3 className="card-title text-lg font-semibold">Nimi: {nimi_finnish ? nimi_finnish : 'No data found'}</h3>
                    <p className="text-sm text-gray-700 flex items-center gap-2"><GoLocation className='text-primary' /> {osite ? osite : 'No data found'}</p>
                </div>
                <div className="card-actions mt-6 flex justify-end">
                    <Link to={`/bike-stations/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBikeStation;