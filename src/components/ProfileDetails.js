import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapComponent from './MapComponent';
import LoadingIndicator from './LoadingIndicator';

const ProfileDetails = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call to fetch the profile details by ID
        axios.get(`https://dummyjson.com/users`)
            .then(response => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <LoadingIndicator />;

    if (!profile) return <div>Error: Profile not found</div>;

    return (
        <div>
            <h1>{profile.name}</h1>
            <img src={profile.photo} alt={profile.name} style={{ width: '200px', borderRadius: '8px' }} />
            <p>{profile.description}</p>
            <div style={{ marginTop: '20px' }}>
                <h2>Location</h2>
                <MapComponent location={profile.location} />
            </div>
        </div>
    );
};

export default ProfileDetails;
