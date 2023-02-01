import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleBikeStation from '../SingleBikeStation/SingleBikeStation';

const BikeStations = () => {
    const [sortOrder, setSortOrder] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [bikeStations, setBikeStations] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);

    const getBikeStations = async () => {
        const response = await axios.get(`http://localhost:5000/bike-stations?sortOrder=${sortOrder}&page=${currentPage}&limit=${limit}`);
        setBikeStations(response.data.data);
        setTotalPages(Math.ceil(response.data.count / limit));
    };

    useEffect(() => {
        getBikeStations();
    }, [sortOrder, currentPage, limit]);

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
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
    }

    return (
        <div>
            <div>
                <h1 className='text-5xl text-accent font-semibold mb-2'>City Bike Stations</h1>
                <p className='text-justify text-black p-6'>Most of the stations are physical stations, i.e. the station has racks for city bikes, on which the city bike is locked when returned. Some city bike stations are so-called virtual stations that can be identified from the information board. When using a virtual station, return the bike by parking it near the information board. During the city bike season, up-to-date information about city bike stations can be found in the City Bike app.</p>

                <h3 className='text-3xl text-accent font-semibold mb-2'>Our Station Locations</h3>
            </div>
            <div>
                <select className="select select-info max-w-xs mr-3" value={sortOrder} onChange={handleSortOrderChange}>
                    <option value={1}>Ascending</option>
                    <option value={-1}>Descending</option>
                </select>
                <select className="select select-info max-w-xs" value={limit} onChange={handleLimitChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
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
    );
};

export default BikeStations;