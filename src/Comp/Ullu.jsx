import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ulluData from '../assets/ullu.json';

const Ullu = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? ulluData : ulluData.slice(0, 5);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-purple-400 mb-6 border-b-2 border-purple-600 inline-block pb-2">
          🔥 Ullu Originals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {visibleItems.map((item) => (
            <Link
              to={`/ullu/${item.id}`}
              key={item.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-600 transition duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-purple-300">{item.title}</h2>
                <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {ulluData.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition"
            >
              {showAll ? 'Show Less 🔙' : 'Show More 🔥'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ullu;
