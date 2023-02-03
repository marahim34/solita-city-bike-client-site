import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StationsSearch = () => {
    const [key, setKey] = useState('');
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:5000/stationsSearch?key=${key}&limit=${limit}&page=${page}`);
        setResult(response.data.data);
        setIsLoading(false);
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSearch();
        }
    };

    const handlePrevious = () => {
        setPage(prevPage => prevPage - 1);
        handleSearch();
    };

    const handleNext = () => {
        setPage(prevPage => prevPage + 1);
        handleSearch();
    };

    return (
        <div>
            <h3 className='text-3xl text-accent font-semibold mb-2'>Search Bike Stations</h3>
            <div className="flex flex-col md:flex-row md:justify-between mt-2 mb-2">
                <div className="w-full md:w-1/3 p-5">
                    <input
                        className="bg-white border border-gray-400 rounded p-2"
                        type="text"
                        placeholder="Search Key"
                        value={key}
                        onChange={e => setKey(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="w-full md:w-1/3 p-5">
                    <select
                        className="bg-white border border-gray-400 rounded p-2"
                        value={limit}
                        onChange={e => setLimit(e.target.value)}
                    >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
            <div className="w-full p-5">
                <button
                    className=" text-white p-2 mr-5 btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
                {isLoading ? <p>Loading...</p> : null}

                {result.map(item => (
                    <div
                        key={item._id}
                        className="border border-gray-500 rounded p-2 my-2 text-left"
                    >
                        <small>
                            <p>Name: {item.name}</p>
                            <p>Namn Swedish: {item.namn_swedish}</p>
                            <p>Nimi Finnish: {item.nimi_finnish}</p>
                            <p>Operaattor: {item.operaattor}</p>
                            <p>Osite: {item.osite}</p>
                            <p>Stad: {item.stad}</p>
                            <p>Address: {item.address}</p></small>
                        <Link to={`${item._id}`}><button className='btn-sm btn-primary rounded'>Details</button></Link>
                    </div>
                ))}
                <div className="mt-5">
                    {result.length > 10 ? (
                        <>
                            <button
                                disabled={page === 1}
                                className="btn btn-primary"
                                onClick={handlePrevious}
                            >
                                Previous
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        </>
                    ) : null}
                </div>

            </div>
        </div>
    );
};

export default StationsSearch;