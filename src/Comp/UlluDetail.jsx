import React from 'react';
import { useParams } from 'react-router-dom';
import ulluData from '../assets/ullu.json';

const UlluDetail = () => {
  const { id } = useParams();
  const content = ulluData.find(item => item.id === id);

  if (!content) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-red-500 text-xl">😞 Content Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-8">
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-lg p-6">
        <img src={content.image} alt={content.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <h1 className="text-3xl font-bold text-purple-400 mb-4">{content.title}</h1>
        <p className="text-base text-zinc-300 leading-relaxed">{content.desc}</p>

        <div className="mt-6 text-sm text-zinc-500 italic">
          *This content is intended for entertainment purposes only.
        </div>
      </div>
    </div>
  );
};

export default UlluDetail;
