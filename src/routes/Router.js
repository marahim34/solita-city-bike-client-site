import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import About from '../pages/About/About';
import BikeStations from '../pages/bikeStations/BikeStations';
import Home from '../pages/Home/Home';
import JourneyListCompiled from '../pages/JourneyListCompiled/JourneyListCompiled';
import JourneyListJuly from '../pages/JourneyListJuly/JourneyListJuly';
import JourneyListJune from '../pages/JourneyListJune/JourneyListJune';
import JourneyListMay from '../pages/JourneyListMay/JourneyListMay';
import SingleBikeStation from '../pages/SingleBikeStation/SingleBikeStation';

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
                element: <SingleBikeStation></SingleBikeStation>
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
                path: '/about',
                element: <About></About>
            }

        ]
    }
])

export default Router;