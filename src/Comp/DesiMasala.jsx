import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import masalaData from '../assets/desimasala.json';

const DesiMasala = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? masalaData : masalaData.slice(0, 5);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-2 border-yellow-600 inline-block pb-2">
          🌶️ Desi Masala Picks
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {visibleItems.map((item) => (
            <Link
              to={`/desimasala/${item.id}`}
              key={item.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500 transition duration-300"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-yellow-400">{item.title}</h2>
                <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {masalaData.length > 5 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition"
            >
              {showAll ? 'Show Less 🔙' : 'Show More 🔥'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DesiMasala;
