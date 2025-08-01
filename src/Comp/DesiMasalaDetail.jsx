import React from 'react';
import { useParams } from 'react-router-dom';
import masalaData from '../assets/desimasala.json';

const DesiMasalaDetail = () => {
  const { id } = useParams();
  const item = masalaData.find((data) => data.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h2 className="text-2xl text-red-500 font-bold">❌ Content Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4">{item.title}</h1>
          <p className="text-zinc-300 text-lg leading-relaxed">{item.desc}</p>

          {/* आप चाहें तो और details भी जोड़ सकते हैं */}
          <div className="mt-6 text-sm text-yellow-500">
            <p>🎬 Genre: Desi Romance</p>
            <p>📅 Release: 2025</p>
            <p>🕒 Duration: 15-20 mins</p>
            <p>🔞 Viewer Discretion Advised</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesiMasalaDetail;
