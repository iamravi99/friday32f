import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Simple Home Component
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://friday32b.onrender.com/api/webseries')
      .then(res => res.json())
      .then(data => {
        setData(data || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 bg-black text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">🔥 LustVerse</h1>
      
      <nav className="mb-8">
        <Link to="/singh/login" className="bg-pink-600 px-4 py-2 rounded mr-4">Admin Login</Link>
        <Link to="/webseries" className="bg-blue-600 px-4 py-2 rounded">Web Series</Link>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.slice(0, 6).map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded">
              <img 
                src={item.images?.[0]?.url || 'https://via.placeholder.com/300x200'} 
                alt={item.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-bold text-pink-400">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.content}</p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center">
            <p className="text-red-500 text-xl">No data found</p>
            <p className="text-gray-400">API: https://friday32b.onrender.com/api/webseries</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Simple Admin Login
const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h2 className="text-2xl font-bold text-pink-500 mb-6">Admin Login</h2>
        <form>
          <input 
            type="email" 
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
          />
          <button className="w-full bg-pink-600 p-3 rounded font-bold">
            Login
          </button>
        </form>
        <Link to="/" className="block text-center mt-4 text-pink-400">← Back to Home</Link>
      </div>
    </div>
  );
};

// Simple Web Series Page
const WebSeries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://friday32b.onrender.com/api/webseries')
      .then(res => res.json())
      .then(data => setData(data || []))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <Link to="/" className="text-pink-400 mb-4 block">← Back to Home</Link>
      <h1 className="text-3xl font-bold text-pink-500 mb-6">Web Series</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded">
            <img 
              src={item.images?.[0]?.url || 'https://via.placeholder.com/300x200'} 
              alt={item.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold text-pink-400">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App
const SimpleApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singh/login" element={<AdminLogin />} />
        <Route path="/webseries" element={<WebSeries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SimpleApp;