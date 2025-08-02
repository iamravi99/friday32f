import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      <span className="ml-3 text-white">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;