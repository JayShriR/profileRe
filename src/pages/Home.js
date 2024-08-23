import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import SearchFilter from '../components/SearchFilter';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <h1>Profile Explorer</h1>
            <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ProfileList searchQuery={searchQuery} />
        </div>
    );
};

export default Home;