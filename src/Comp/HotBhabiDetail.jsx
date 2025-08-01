import React from 'react';
import { useParams } from 'react-router-dom';
import hotBhabiData from '../assets/hotbhabi.json';

const HotBhabiDetail = () => {
  const { id } = useParams();
  const item = hotBhabiData.find((d) => d.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
        <h2 className="text-2xl text-red-500">Content Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-auto object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-rose-500 mb-4">{item.title}</h1>
          <p className="text-zinc-300 text-lg leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HotBhabiDetail;
