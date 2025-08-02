import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Viral = () => {
  const [viralData, setViralData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/viral') // ⚠️ This should match your backend route
      .then(res => {
        setViralData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching viral data:", err);
        setLoading(false);
      });
  }, []);

  const visibleItems = showAll ? viralData : viralData.slice(0, 5);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-2 border-yellow-600 inline-block pb-2">
          ⚡ Viral Desi Leaks
        </h1>

        {loading ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {visibleItems.map((item) => (
              <Link to={`/viral/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500 transition duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-yellow-300">{item.title}</h2>
                    <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {viralData.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-yellow-500 text-zinc-900 px-6 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              {showAll ? 'Show Less 👈' : 'Show More 🔥'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viral;
