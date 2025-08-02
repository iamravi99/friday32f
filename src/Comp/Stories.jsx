import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/stories`);
      setStories(response.data || []);
    } catch (err) {
      console.error('Error fetching stories:', err);
      setError('Failed to load stories. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const visibleStories = showAll ? stories : stories.slice(0, 6);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-500 mb-6 border-b-2 border-pink-700 inline-block pb-2">📖 Bold Stories</h1>

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} onRetry={fetchData} />
        ) : stories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No stories available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleStories.map(story => (
              <Link to={`/stories/${story._id}`} key={story._id}>
                <div className="bg-zinc-900 rounded-lg overflow-hidden shadow hover:shadow-pink-600 transition">
                  <img src={story.images && story.images.length > 0 ? story.images[0].url : story.image || 'https://via.placeholder.com/300x200'} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-pink-400">{story.title}</h2>
                    <p className="text-sm text-zinc-300 line-clamp-2 mt-1">{story.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {stories.length > 6 && (
          <div className="text-center mt-6">
            <button
              className="bg-pink-600 px-6 py-2 rounded-full hover:bg-pink-700"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less 🔙" : "Show More 🔥"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
