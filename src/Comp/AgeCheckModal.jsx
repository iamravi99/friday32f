import React, { useEffect, useState } from 'react';

const AgeCheckModal = ({ onAccept }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isAdult = localStorage.getItem('isAdult');
    if (!isAdult) {
      setShowModal(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem('isAdult', 'true');
    setShowModal(false);
    onAccept(true);
  };

  const handleNo = () => {
    alert('❌ You are not allowed to access this website.');
    window.location.href = 'https://www.google.com'; // या आप कोई और page पर भेज सकते हो
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-2xl max-w-sm text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">🔞 Are you 18+?</h2>
        <p className="mb-6">This website contains adult content. Please confirm your age.</p>
        <div className="flex justify-center gap-4">
          <button onClick={handleYes} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold">Yes</button>
          <button onClick={handleNo} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold">No</button>
        </div>
      </div>
    </div>
  );
};

export default AgeCheckModal;
