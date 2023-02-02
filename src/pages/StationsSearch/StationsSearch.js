import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StationsSearch = () => {
    const [key, setKey] = useState('');
    const [limit, setLimit] = useState(20);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('asc');
    const [result, setResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async () => {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:5000/stationsSearch?key=${key}&limit=${limit}&page=${page}&sort=${sort}`);
        setResult(response.data.data);
        setIsLoading(false);
    };

    return (
        <div className="flex flex-col md:flex-row md:justify-between">
            <div className="w-full md:w-1/3 p-5">
                <input
                    className="border border-gray-500 p-2"
                    type="text"
                    placeholder="Search Key"
                    value={key}
                    onChange={e => setKey(e.target.value)}
                />
            </div>
            <div className="w-full md:w-1/3 p-5">
                <select
                    className="border border-gray-500 p-2"
                    value={limit}
                    onChange={e => setLimit(e.target.value)}
                >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>
            </div>
            <div className="w-full md:w-1/3 p-5">
                <select
                    className="border border-gray-500 p-2"
                    value={page}
                    onChange={e => setPage(e.target.value)}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div className="w-full md:w-1/3 p-5">
                <select
                    className="border border-gray-500 p-2"
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                >
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div className="w-full p-5">
                <button
                    className="bg-blue-500 text-white p-2"
                    onClick={handleSearch}
                >
                    Search
                </button>
                {isLoading ? <p>Loading...</p> : null}

                {result.map(item => (
                    <div
                        key={item._id}
                        className="border border-gray-500 p-2 my-2"
                    >
                        <p>Name: {item.name}</p>
                        <p>Namn Swedish: {item.namn_swedish}</p>
                        <p>Nimi Finnish: {item.nimi_finnish}</p>
                        <p>Operaattor: {item.operaattor}</p>
                        <p>Osite: {item.osite}</p>
                        <p>Stad: {item.stad}</p>
                        <p>Address: {item.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StationsSearch;