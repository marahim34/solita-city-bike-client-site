import React from 'react';
import Banner from '../Banner/Banner';
import BikeStationInfoHome from '../BikeStationInfoHome/BikeStationInfoHome';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BikeStationInfoHome></BikeStationInfoHome>
        </div>
    );
};

export default Home;