import React from 'react';
import { useParams } from 'react-router-dom';
import hotpicsData from '../assets/hotpics.json';

const HotPicsDetail = () => {
  const { id } = useParams();
  const pic = hotpicsData.find(item => item.id === id);

  if (!pic) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-red-500 text-xl">📸 Image Not Found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <img
        src={pic.image}
        alt="HotPic Detail"
        className="w-full max-w-3xl rounded-xl shadow-xl object-contain"
      />
    </div>
  );
};

export default HotPicsDetail;
