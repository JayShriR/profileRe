import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';

const ProfileList = () => {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        // Fetch profiles from an API or mock data
        axios.get('/api/profiles').then(response => {
            setProfiles(response.data);
        });
    }, []);

    return (
        <div className="profile-list">
            {profiles.map(profile => (
                <ProfileCard key={profile.id} profile={profile} />
            ))}
        </div>
    );
};

export default ProfileList;