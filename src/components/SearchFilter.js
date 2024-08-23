import React from 'react';

const SearchFilter = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search profiles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchFilter;