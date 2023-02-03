import React from 'react';
import BannerImage from '../../../resources/logo.png';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl text-accent font-bold">City Bike</h1>
                    <p className="py-6">Welcome to use the city bikes again in the spring!
                        The city bike season starts on 1 April and ends on 31 October.
                    </p>
                    <button className='btn btn-primary'>Know More!</button>
                </div>
                <img src={BannerImage} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />

            </div>
        </div>
    );
};

export default Banner;