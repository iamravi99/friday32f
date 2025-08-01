import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hotpicsData from '../assets/hotpics.json';

const HotPics = () => {
  const [showAll, setShowAll] = useState(false);
  const visiblePics = showAll ? hotpicsData : hotpicsData.slice(0, 5);

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-fuchsia-400 mb-6 border-b-2 border-fuchsia-600 inline-block pb-2">
          🔥 Hot Pics Gallery
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
          {visiblePics.map((item) => (
            <Link to={`/hotpics/${item.id}`} key={item.id}>
              <img
                src={item.image}
                alt="hotpic"
                className="w-full h-48 object-cover rounded-lg hover:scale-105 hover:shadow-fuchsia-500 transition duration-300"
              />
            </Link>
          ))}
        </div>

        {hotpicsData.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-fuchsia-600 text-white px-6 py-2 rounded-full hover:bg-fuchsia-700 transition"
            >
              {showAll ? 'Show Less 🔙' : 'Show More 🔥'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotPics;
