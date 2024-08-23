import React from 'react';
import './LoadingIndicator.css'; // Optional: You can style it separately

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingIndicator;
