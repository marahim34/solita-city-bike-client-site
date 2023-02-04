import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '80vh'
};

const BikeStationCard = () => {
    const { data } = useLoaderData();
    const { _id, x, y, kaupunki, name, namn_swedish, nimi_finnish, operaattor, osite, address } = data;

    const center = {
        lat: y,
        lng: x
    };

    const [selectedStation, setSelectedStation] = useState(null);

    const handleMarkerClick = (station) => {
        setSelectedStation(station);
    };

    const handleCloseClick = () => {
        setSelectedStation(null);
    };

    return (
        <div className='block hero lg:flex md:flex'>
            <div className="w-full md:w-1/2 p-6 bg-white rounded shadow mt-6">
                <h2 className="text-xl font-bold mb-4"> <span className='text-primary'>Station Name:</span>  {name}</h2>
                <p className="text-gray-600">Address: {address}</p>
                <p className="text-gray-600"> bikes available</p>

            </div>

            <div className='lg:w-1/2 md:w-1/2 p-6 '>
                <LoadScript
                    googleMapsApiKey={process.env.API_KEY}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                    >
                        <Marker
                            position={center}
                            onClick={() => handleMarkerClick(data)}
                        />
                        {selectedStation && (
                            <InfoWindow
                                position={center}
                                onCloseClick={handleCloseClick}
                            >
                                <div>
                                    <h2>{selectedStation.name}</h2>
                                    <p>Address: {selectedStation.address}</p>
                                    <p>Latitude: {selectedStation.y}</p>
                                    <p>Longitude: {selectedStation.x}</p>
                                </div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </LoadScript>
            </div>

        </div>
    );
};

export default BikeStationCard;
