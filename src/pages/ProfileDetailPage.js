import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MapComponent from '../components/MapComponent';

const ProfileDetailPage = () => {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users`).then(response => {
            setProfile(response.data);
        });
    }, [id]);

    if (!profile) return <div>Loading...</div>;

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>{profile.description}</p>
            <MapComponent location={profile.location} />
        </div>
    );
};

export default ProfileDetailPage;