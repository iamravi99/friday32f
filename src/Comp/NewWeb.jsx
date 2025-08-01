import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newwebData from '../assets/newweb.json';
// import Navbar from './Home/Navbar'; // Uncomment if needed

const NewWeb = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? newwebData : newwebData.slice(0, 5);

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-pink-500 mb-6 border-b-2 border-pink-700 inline-block pb-2">
            🔥 Bold Web Content
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6">
            {visibleItems.map((item) => (
              <Link to={`/newweb/${item.id}`} key={item.id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition duration-300">
                  <img
                    src={item.image}
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

          {newwebData.length > 5 && (
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
    </>
  );
};

export default NewWeb;
