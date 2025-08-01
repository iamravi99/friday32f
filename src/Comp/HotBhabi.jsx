import React from 'react';
import hotBhabiData from '../assets/hotbhabi.json';
import { Link } from 'react-router-dom';

const HotBhabi = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-rose-500 mb-6 border-b-2 border-rose-700 inline-block pb-2">
          💋 Hot Bhabhi Specials
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {hotBhabiData.map((item) => (
            <Link
              to={`/hotbhabi/${item.id}`}
              key={item.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-rose-600 transition duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-rose-400">{item.title}</h2>
                <p className="text-sm text-zinc-300 mt-2 line-clamp-2">{item.desc}</p>
                <p className="text-xs text-rose-500 mt-2 hover:underline">Read More →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotBhabi;
