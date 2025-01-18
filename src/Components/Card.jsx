import React, { useEffect, useState } from 'react';

const VideoCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.status) {
          setCategories(result.data);
        } else {
          throw new Error(result.message || 'Failed to fetch categories');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-16">
      <h1 className="text-2xl font-bold mt-8 mb-4">Video Categories</h1>
      <ul className="list-disc list-inside text-lg text-gray-800">
        {categories.map((category) => (
          <li key={category.category_id}>
            {category.category_id} - {category.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoCategories;
