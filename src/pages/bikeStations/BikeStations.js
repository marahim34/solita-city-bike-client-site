import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
            <select value={sortOrder} onChange={handleSortOrderChange}>
                <option value={1}>Ascending</option>
                <option value={-1}>Descending</option>
            </select>
            <select value={limit} onChange={handleLimitChange}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            <div>
                {bikeStations.map(bikeStation => (
                    <div key={bikeStation._id}>{bikeStation.name}</div>
                ))}
            </div>
            <div>
                {pageNumbers.map((pageNumber, index) => (
                    <React.Fragment key={index}>
                        {pageNumber === '...' ? (
                            <span className="dots">{pageNumber}</span>
                        ) : (
                            <button className='btn' onClick={() => handlePageChange(pageNumber)} disabled={pageNumber === currentPage}>
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