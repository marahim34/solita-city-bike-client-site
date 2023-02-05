import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import AddNewBikeStation from '../pages/AddNewBikeStation/AddNewBikeStation';
import BikeStationCard from '../pages/BikeStationsPage/BikeStationCard/BikeStationCard';
import BikeStations from '../pages/BikeStationsPage/bikeStations/BikeStations';
import Error from '../pages/Error/Error';
import Home from '../pages/HomePage/Home/Home';
import JourneyListCompiled from '../pages/JourneyDestinationsPage/JourneyListCompiled/JourneyListCompiled';
import JourneyListJuly from '../pages/JourneyDestinationsPage/JourneyListJuly/JourneyListJuly';
import JourneyListJune from '../pages/JourneyDestinationsPage/JourneyListJune/JourneyListJune';
import JourneyListMay from '../pages/JourneyDestinationsPage/JourneyListMay/JourneyListMay';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bike-stations',
                element: <BikeStations></BikeStations>
            },
            {
                path: '/bike-stations/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/bike-stations/${params.id}`),
                element: <BikeStationCard></BikeStationCard>
            },
            {
                path: '/journey-destinations/may',
                element: <JourneyListMay></JourneyListMay>
            },
            {
                path: '/journey-destinations/june',
                element: <JourneyListJune></JourneyListJune>
            },
            {
                path: '/journey-destinations/july',
                element: <JourneyListJuly></JourneyListJuly>
            },
            {
                path: '/journeyList-compiled',
                element: <JourneyListCompiled></JourneyListCompiled>
            },


            {
                path: '/new-station',
                element: <AddNewBikeStation></AddNewBikeStation>
            },
            {
                path: '*',
                element: <Error></Error>
            }

        ]
    }
])

export default Router;