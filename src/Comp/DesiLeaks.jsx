import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DesiLeaks = () => {
  const [leaks, setLeaks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/desileaks")
      .then(res => {
        setLeaks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading desi leaks:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-pink-500 mb-6 border-b-2 border-pink-700 inline-block pb-2">
          🔥 Desi Leaks & Viral MMS News
        </h1>

        {loading ? (
          <p className="text-gray-300">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {leaks.map(item => (
              <Link to={`/desileaks/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-pink-400">{item.title}</h2>
                    <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DesiLeaks;
