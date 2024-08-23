import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = () => {
    const [profiles, setProfiles] = useState([]);
    const [newProfile, setNewProfile] = useState({ name: '', photo: '', description: '', location: '' });

    useEffect(() => {
        axios.get('/api/profiles').then(response => {
            setProfiles(response.data);
        });
    }, []);

    const addProfile = () => {
        axios.post('/api/profiles', newProfile).then(response => {
            setProfiles([...profiles, response.data]);
        });
    };

    const deleteProfile = (id) => {
        axios.delete(`/api/profiles/${id}`).then(() => {
            setProfiles(profiles.filter(profile => profile.id !== id));
        });
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            {/* Add profile form */}
            <div>
                <input type="text" placeholder="Name" onChange={e => setNewProfile({ ...newProfile, name: e.target.value })} />
                <input type="text" placeholder="Photo URL" onChange={e => setNewProfile({ ...newProfile, photo: e.target.value })} />
                <textarea placeholder="Description" onChange={e => setNewProfile({ ...newProfile, description: e.target.value })}></textarea>
                <input type="text" placeholder="Location" onChange={e => setNewProfile({ ...newProfile, location: e.target.value })} />
                <button onClick={addProfile}>Add Profile</button>
            </div>
            {/* List of profiles with delete option */}
            <ul>
                {profiles.map(profile => (
                    <li key={profile.id}>
                        {profile.name} <button onClick={() => deleteProfile(profile.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;