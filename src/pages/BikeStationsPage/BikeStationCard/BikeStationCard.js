import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';

const BikeStationCard = () => {
    const { data } = useLoaderData();
    const { _id, x, y, kaupunki, name, namn_swedish, nimi_finnish, operaattor, osite, address } = data;
    console.log(x, y, kaupunki, name, namn_swedish, nimi_finnish, operaattor);

    // {"_id":"63d06315895a17f08f53237c","x":24.9620788508104,"y":60.2055418168461,"fid":266,"kaupunki":" ","name":"A.I. Virtasen aukio","namn_swedish":"A. I. Virtanens plats","nimi_finnish":"A.I. Virtasen aukio","operaattor":" ","osite":"Gustaf Hällströmin katu 1","stad":" ","address":"Gustaf Hällströms gata 1","id":204,"kapasiteet":24}


    return (
        <div className="p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4"> <span className='text-primary'>Station Name:</span>  {name}</h2>
            <p className="text-gray-600">Address: {address}</p>
            <p className="text-gray-600"> bikes available</p>

            {/* Total number of journeys starting from the station
            Total number of journeys ending at the station */}
        </div>
    );
};

export default BikeStationCard;
