import React from 'react';
import mayIcon from '../../../resources/May.png';
import juneIcon from '../../../resources/June.png';
import julyIcon from '../../../resources/July.png';
import JourneyListCard from './JourneyListCard';

const JourneyListCompiled = () => {

    const cardData = [
        {
            id: 1,
            name: 'May 2021',
            month: 'may',
            description: 'The list contains the data from journeys made with city bikes in the Helsinki Capital area on May, 2021.',
            icon: mayIcon,
            link: 'http://localhost:3000/journey-destinations/may'
        },
        {
            id: 2,
            name: 'June 2021',
            month: 'june',
            description: 'The list contains the data from journeys made with city bikes in the Helsinki Capital area on June, 2021.',
            icon: juneIcon,
            link: 'http://localhost:3000/journey-destinations/june'
        },
        {
            id: 3,
            name: 'July 2021',
            month: 'july',
            description: 'The list contains the data from journeys made with city bikes in the Helsinki Capital area on July, 2021.',
            icon: julyIcon,
            link: 'http://localhost:3000/journey-destinations/july'
        },
    ]

    return (
        <div>
            <div className='grid mt-8 md:grid-cols-2 lg:grid-cols-3 gap-6 m-6'>
                {
                    cardData.map(card => <JourneyListCard key={card.id} card={card}></JourneyListCard>)
                }
            </div>
        </div>
    );
};

export default JourneyListCompiled;