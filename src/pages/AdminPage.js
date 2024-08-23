import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminPanel from '../components/AdminPanel';
import LoadingIndicator from '../components/LoadingIndicator';

const AdminPage = () => {
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch profiles from an API (or mock data)
        axios.get('/api/profiles')
            .then(response => {
                setProfiles(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching profiles:', error);
                setLoading(false);
            });
    }, []);

    const addProfile = (newProfile) => {
        axios.post('/api/profiles', newProfile)
            .then(response => {
                setProfiles([...profiles, response.data]);
            })
            .catch(error => {
                console.error('Error adding profile:', error);
            });
    };

    const editProfile = (updatedProfile) => {
        axios.put(`/api/profiles/${updatedProfile.id}`, updatedProfile)
            .then(response => {
                setProfiles(profiles.map(profile => 
                    profile.id === updatedProfile.id ? response.data : profile
                ));
            })
            .catch(error => {
                console.error('Error editing profile:', error);
            });
    };

    const deleteProfile = (id) => {
        axios.delete(`/api/profiles/${id}`)
            .then(() => {
                setProfiles(profiles.filter(profile => profile.id !== id));
            })
            .catch(error => {
                console.error('Error deleting profile:', error);
            });
    };

    if (loading) return <LoadingIndicator />;

    return (
        <div>
            <h1>Admin Panel</h1>
            <AdminPanel
                profiles={profiles}
                addProfile={addProfile}
                editProfile={editProfile}
                deleteProfile={deleteProfile}
            />
        </div>
    );
};

export default AdminPage;
