import React from 'react';
import { Link } from 'react-router-dom';
import map from '../../resources/bikeStationMap.jpg'

const BikeStationInfoHome = () => {
    return (
        <section className='mt-32 bg-base-100'>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row items-center">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h4 className='text-primary text-5xl font-bold'>Buy a pass</h4>
                        <h1 className="text-3xl font-bold p-1 text-accent">500 Bike Stations only in Tampere</h1>
                        <p className="py-6 text-accent text-justify">Affordable pricing: 4 €/day, 7 €/month, offer for the rest of the season: 10€! (Until 31.10.). Discounted price is directly available in the app. All options include an unlimited number of 45-minute rides.
                        </p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className='btn btn-primary mr-4'>Buy Pass Now</button>
                            <Link to='/bike-stations'>
                                <button className='btn btn-primary'>Our Bike Stations</button>
                            </Link>
                        </div>
                    </div>
                    <img src={map} className="mt-10 lg:mt-0 lg:ml-10 lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                </div>
            </div>
        </section>

    );
};

export default BikeStationInfoHome;