import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import storiesData from '../assets/stories.json';

const Storie = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleStories = showAll ? storiesData : storiesData.slice(0, 5);

  return (
    <>
      <div className="min-h-screen bg-black text-white px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold text-red-500 mb-6 border-b-2 border-red-600 inline-block pb-2">
            📖 Desi Adult Stories
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {visibleStories.map((story) => (
              <Link to={`/storie/${story.id}`} key={story.id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-red-600 transition duration-300">
                  <img src={story.image} alt={story.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-red-400">{story.title}</h2>
                    <p className="text-sm text-zinc-300 mt-2">{story.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {storiesData.length > 5 && (
            <div className="text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
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

export default Storie;
