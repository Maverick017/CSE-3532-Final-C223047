import React, { useEffect, useState } from 'react';
import './ComedyPage.css';

const ComedyPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/videos/category/comedy')
      .then((response) => response.json())
      .then((data) => setVideos(data.data))
      .catch((error) => console.error('Error fetching comedy videos:', error));
  }, []);

  return (
    <div className="comedy-page">
      <h2 className="comedy-title">Comedy Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video._id} className="video-card">
            <img src={video.thumbnail_url} alt="Thumbnail" className="video-thumbnail" />
            <div className="video-info">
              <h3 className="video-title">{video.title}</h3>
              <p className="video-details">{video.uploader_name} • {video.view_count} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComedyPage;
