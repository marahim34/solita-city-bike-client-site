import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBikeStation from '../SingleBikeStation/SingleBikeStation';
import StationsSearch from '../StationsSearch/StationsSearch';

const BikeStations = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [bikeStations, setBikeStations] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortOrder, setSortOrder] = useState('');

    const getBikeStations = async () => {
        const response = await axios.get(`http://localhost:5000/bike-stations?page=${currentPage}&limit=${limit}&sortOrder=${sortOrder}`);
        setBikeStations(response.data.data);
        setTotalPages(Math.ceil(response.data.count / limit));
    };

    useEffect(() => {
        getBikeStations();
    }, [currentPage, limit, sortOrder]);

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        if (i <= 3 || i > totalPages - 3 || (i >= currentPage - 1 && i <= currentPage + 1)) {
            pageNumbers.push(i);
        } else if (pageNumbers[pageNumbers.length - 1] !== '...') {
            pageNumbers.push('...');
        }
    };

    return (
        <div>
            <div>
                <h1 className='text-5xl text-accent font-semibold mb-2'>City Bike Stations</h1>
                <p className='text-justify text-black p-6'>Most of the stations are physical stations, i.e. the station has racks for city bikes, on which the city bike is locked when returned. Some city bike stations are so-called virtual stations that can be identified from the information board. When using a virtual station, return the bike by parking it near the information board. During the city bike season, up-to-date information about city bike stations can be found in the City Bike app.</p>
            </div>
            <div className="flex">
                <div className="w-2/3 h-full">
                    <h3 className='text-3xl text-accent font-semibold mb-2'>Our Station Locations</h3>
                    <div className="flex justify-between mt-2 mb-2">
                        <div className="w-1/3">
                            <label htmlFor="limit" className="text-xl text-black font-medium">Sort: </label>
                            <select id="sortOrder" className="bg-white border border-gray-400 rounded p-2" defaultValue={'Default'} onChange={handleSortOrderChange}>
                                <option value="Default" disabled>Default</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                        <div className="w-1/3">
                            <label htmlFor="limit" className="text-xl text-black font-medium">Limit: </label>
                            <select id="limit" className="bg-white border border-gray-400 rounded p-2" value={limit} onChange={handleLimitChange}>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full p-6">
                        {bikeStations.map(bikeStation => <SingleBikeStation key={bikeStation._id} bikeStation={bikeStation}></SingleBikeStation>)}
                    </div>
                    <div className='mb-6'>
                        {pageNumbers.map((pageNumber, index) => (
                            <React.Fragment key={index}>
                                {pageNumber === '...' ? (
                                    <span className="dots">{pageNumber}</span>
                                ) : (
                                    <button className='btn btn-primary' onClick={() => handlePageChange(pageNumber)} disabled={pageNumber === currentPage}>
                                        {pageNumber}
                                    </button>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 h-full">
                    <StationsSearch></StationsSearch>
                </div>
            </div>




        </div>
    );
};

export default BikeStations;
