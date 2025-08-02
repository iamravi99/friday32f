import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="text-center py-20">
      <div className="text-red-500 text-xl mb-4">⚠️ {message}</div>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;