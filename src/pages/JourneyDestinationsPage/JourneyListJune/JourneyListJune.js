import axios from 'axios';
import React, { useEffect, useState } from 'react';
import JourneySearchJune from './JourneySearchJune';

const JourneyListJune = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [journeyDestinations, setJourneyDestinations] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(20);
    const [sortOrder, setSortOrder] = useState('');
    const [journeys, setJourneys] = useState(0);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState('');

    const getJourneyDestinations = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/journey-destinations/june?page=${currentPage}&limit=${limit}&sortOrder=${sortOrder}&filter=${filter}`);
            setJourneyDestinations(response.data.data);
            setTotalPages(Math.ceil(response.data.count / limit));
            setJourneys(response.data.count);
            console.log(response);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getJourneyDestinations();
    }, [currentPage, limit, sortOrder, filter]);

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
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
            {loading && <button className="btn loading">loading</button>}
            <div>
                <div>
                    <h1 className='text-5xl text-accent font-semibold mb-2'>Journey Destinations in June, 2021</h1>
                    <p className='text-justify text-black p-6'>During the city bike season, up-to-date information about city bike stations can be found in the City Bike app.</p>
                    <p className='text-justify text-black pl-6 pr-6'>Our custoers have used the city bike at least in {journeys} journeys in June, 2021.</p>
                </div>
                <div className="block md:flex flex-col md:flex-row w-full h-full">
                    <div className="md:w-2/3 h-full p-6">
                        <h3 className='text-3xl text-accent font-semibold mb-2'>Journey Lists</h3>
                        <div className="flex justify-between mt-2 mb-2">
                            <div className="w-full md:w-1/3">
                                <label htmlFor="sortOrder" className="text-xl text-black font-medium">Sort: </label>
                                <select id="sortOrder" className="bg-white border border-gray-400 rounded p-2" defaultValue="Default" onChange={handleSortOrderChange}>
                                    <option value="Default" disabled>Default</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/3">
                                <label htmlFor="limit" className="text-xl text-black font-medium">Limit: </label>
                                <select id="limit" className="bg-white border border-gray-400 rounded p-2" value={limit} onChange={handleLimitChange}>
                                    <option value={20}>20</option>
                                    <option value={50}>50</option>
                                    <option value={100}>100</option>
                                </select>
                            </div>
                            <div>
                                <form onChange={handleFilterChange}>
                                    <label for="departure_station_name">Departure Station Name:</label>
                                    <select name="departure_station_name">
                                        <option value="A.I. Virtasen aukio">A.I. Virtasen aukio</option>
                                        <option value="Arabian kauppakeskus">Arabian kauppakeskus</option>
                                    </select>

                                    <label for="departure_station_id">Departure Station ID:</label>
                                    <select name="departure_station_id">
                                        {/* <!-- Add options for departure station IDs here --> */}
                                    </select>

                                    <label for="return_station_name">Return Station Name:</label>
                                    <select name="return_station_name">
                                        {/* <!-- Add options for return station names here --> */}
                                    </select>

                                    <label for="return_station_id">Return Station ID:</label>
                                    <select name="return_station_id">
                                        {/* <!-- Add options for return station IDs here --> */}
                                    </select>

                                    <label for="covered_distance_in_meter">Covered Distance (in meters):</label>
                                    <select name="covered_distance_in_meter">
                                        <option value="0-.5">0-.5</option>
                                        <option value=".51-2">.51-2</option>
                                        <option value="2-5">2-5</option>
                                        <option value="more_than_5">more than 5</option>
                                    </select>

                                    <label for="duration_in_seconds">Duration (in seconds):</label>
                                    <select name="duration_in_seconds">
                                        <option value="less_than_2">less than 2</option>
                                        <option value="3-5">3-5</option>
                                        <option value="6-10">6-10</option>
                                        <option value="more_than_10">more than 10</option>
                                    </select>

                                    {/* <!-- Add a submit button --> */}
                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-full p-6 text-xs">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <table className="table table-compact min-w-full text-center">
                                    <thead className='border-b'>
                                        <tr>
                                            <th className="w-10"></th>
                                            <th className="w-32 sm:w-48 md:w-64">Departure Station</th>
                                            <th className="w-32 sm:w-48 md:w-64">Return Station</th>
                                            <th className="w-32 sm:w-48 md:w-64">covered distance (in KM)</th>
                                            <th className="w-20 sm:w-32 md:w-40">Duration (in Minutes)</th>
                                        </tr>
                                    </thead>
                                    {journeyDestinations.map((destination, index) =>

                                        <tbody key={destination._id}>
                                            <tr>
                                                <th className="w-10">{index + 1}</th>
                                                <td className="w-32 sm:w-48 md:w-64">{destination.departure_station_name ? destination.departure_station_name : 'No Data Found'}</td>
                                                <td className="w-32 sm:w-48 md:w-64">{destination.return_station_name ? destination.return_station_name : 'No Data Found'}</td>
                                                <td className="w-32 sm:w-48 md:w-64 text-center">{destination.covered_distance_in_meter ? (Math.ceil(destination.covered_distance_in_meter) / 1000) : 'No Data Found'}</td>
                                                <td className="w-20 sm:w-32 md:w-40">{destination.duration_in_seconds ? (Math.floor(destination.duration_in_seconds / 60)) : 'No Data Found'}:{destination.duration_in_seconds % 60}</td>
                                            </tr>
                                            {/* <!-- ... --> */}
                                        </tbody>
                                    )}
                                </table>
                            </div>
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
                    <div className="w-full md:w-1/3 h-full">
                        <JourneySearchJune></JourneySearchJune>
                    </div>
                </div>
            </div>




        </div >
    );
};

export default JourneyListJune;