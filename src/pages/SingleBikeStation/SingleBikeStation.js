import React from 'react';
import { Link } from 'react-router-dom';

const SingleBikeStation = ({ bikeStation }) => {

    // {"_id":"63d06315895a17f08f53237c","x":24.9620788508104,"y":60.2055418168461,"fid":266,"kaupunki":" ","name":"A.I. Virtasen aukio","namn_swedish":"A. I. Virtanens plats","nimi_finnish":"A.I. Virtasen aukio","operaattor":" ","osite":"Gustaf Hällströmin katu 1","stad":" ","address":"Gustaf Hällströms gata 1","id":204,"kapasiteet":24}

    const { _id, name, nimi_finnish, osite } = bikeStation;
    return (
        <div className="w-full lg:w-1/3 md:w-1/2 p-6 md:card-side shadow-xl mb-6 lg:mb-0">
            <div className="card-body  text-left">
                <div className='h-12'>
                    <h2 className="card-title text-lg font-bold">Nimi: {nimi_finnish}</h2>
                    <h2 className="card-title text-lg font-bold">Name: {name}</h2>
                    <p className="text-sm text-gray-700">Osoite: {osite}</p>
                </div>
                <div className="card-actions mt-6 flex justify-end">
                    <Link to={`/bike-stations/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBikeStation;