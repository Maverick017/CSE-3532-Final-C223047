import React from 'react';
import './VideoGrid.css';

const VideoGrid = () => {
  return (
    <div className="video-grid">
      {/* Video Cards */}
      <div className="video-card">
        <img src="https://via.placeholder.com/300x150" alt="Thumbnail" className="video-thumbnail" />
        <div className="video-info">
          <h3 className="video-title">Building a Winning UX Strategy Using the Kano Model</h3>
          <p className="video-details">Awlad Hossain • 91K views</p>
        </div>
      </div>
      {/* Add more video cards as needed */}
    </div>
  );
};

export default VideoGrid;
