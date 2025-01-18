import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const tabNames = ["All", "Music", "Comedy", "Drawing"];
  const [activeTab, setActiveTab] = useState("All");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openapi.programming-hero.com/api/videos/category/1000"
        );
        const data = await response.json();
        if (data.status) {
          setVideos(data.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const filteredVideos =
    activeTab === "All"
      ? videos
      : videos.filter((video) => {
          if (activeTab === "Music") return video.category_id === "1001";
          if (activeTab === "Comedy") return video.category_id === "1003";
          return false;
        });

  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow py-8 px-12">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="./assets/Logo.png"
              alt="Logo"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <button className="btn bg-gray-300 px-4 py-2">Sort by View</button>
        </div>
        <div className="navbar-end">
          <button className="btn btn-error text-white px-4 py-2">Blog</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-12 mt-12">
        <div role="tablist" className="flex justify-center mt-6 space-x-4">
          {tabNames.map((tabName, index) => (
            <a
              key={index}
              role="tab"
              className={`tab px-8 py-3 rounded-lg text-center font-bold cursor-pointer ${
                activeTab === tabName
                  ? "bg-red-600 text-white"
                  : "bg-transparent text-gray-600"
              }`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
              }}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === "Drawing" ? (
        // No Data Section
        <div className="flex flex-col items-center  h-screen white">
          <img
            src="assets\Icon.png" // Replace with the actual image path
            alt="No Data"
            className="w-40 h-40 mt-16"
          />
          <h1 className="text-3xl font-bold text-gray-600">Oops, no data</h1>
        </div>
      ) : (
        // Video Grid
        <div className="container mx-auto px-12 mt-16">
          <div className="grid grid-cols-4 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-lg rounded-lg overflow-hidden"
              >
                <figure>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {video.title || "Unknown Title"}
                  </h3>
                  <div className="flex items-center space-x-3 mt-3">
                    <img
                      src={
                        video.authors[0]?.profile_picture ||
                        "https://i.pravatar.cc/40"
                      }
                      alt="Author"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-gray-600">
                        {video.authors[0]?.profile_name || "Unknown Author"}
                      </p>
                      {video.authors[0]?.verified && (
                        <span className="text-blue-600 text-xs">
                          &#x2714; Verified
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    {video.others.views} views
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
