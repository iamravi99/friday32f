import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const NewWeb = () => {
  const [webData, setWebData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/webseries`);
      setWebData(response.data || []);
    } catch (err) {
      console.error("Error fetching web data:", err);
      setError('Failed to load web series. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visibleItems = showAll ? webData : webData.slice(0, 5);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-pink-500 mb-6 border-b-2 border-pink-700 inline-block pb-2">
          🔥 Bold Web Content
        </h1>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={fetchData} />
        ) : webData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No web series available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {visibleItems.map((item) => (
              <Link to={`/newweb/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition duration-300">
                  <img
                    src={item.images && item.images.length > 0 ? item.images[0].url : item.image || 'https://via.placeholder.com/300x200'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-pink-400">{item.title}</h2>
                    <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {webData.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"
            >
              {showAll ? 'Show Less 🔙' : 'Show More 🔥'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewWeb;
