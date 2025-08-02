import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [webData, setWebData] = useState([]);
  const [stories, setStories] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [viral, setViral] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        
        const [webRes, storiesRes, actressRes, viralRes] = await Promise.all([
          axios.get(`${apiUrl}/webseries`),
          axios.get(`${apiUrl}/stories`),
          axios.get(`${apiUrl}/actresses`),
          axios.get(`${apiUrl}/viral`)
        ]);

        setWebData(webRes.data.slice(0, 4) || []);
        setStories(storiesRes.data.slice(0, 4) || []);
        setActresses(actressRes.data.slice(0, 4) || []);
        setViral(viralRes.data.slice(0, 4) || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
        <span className="ml-3">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Web Series Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-pink-500">🔥 Latest Web Series</h2>
            <Link to="/newweb" className="text-pink-400 hover:text-pink-300">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {webData.map((item) => (
              <Link to={`/newweb/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition">
                  <img
                    src={item.images?.[0]?.url || item.image || 'https://via.placeholder.com/300x200'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-pink-400">{item.title}</h3>
                    <p className="text-sm text-zinc-300 mt-1 line-clamp-2">{item.content || item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-pink-500">📖 Hot Stories</h2>
            <Link to="/stories" className="text-pink-400 hover:text-pink-300">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stories.map((item) => (
              <Link to={`/stories/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition">
                  <img
                    src={item.images?.[0]?.url || item.image || 'https://via.placeholder.com/300x200'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-pink-400">{item.title}</h3>
                    <p className="text-sm text-zinc-300 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Actresses Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-pink-500">🌟 Hot Actresses</h2>
            <Link to="/ulluactresses" className="text-pink-400 hover:text-pink-300">View All →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {actresses.map((item) => (
              <Link to={`/actress/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-600 transition">
                  <img
                    src={item.images?.[0]?.url || item.image || 'https://via.placeholder.com/300x200'}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-pink-400">{item.name}</h3>
                    <p className="text-sm text-zinc-300 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Viral Section */}
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-yellow-400">⚡ Viral Content</h2>
            <Link to="/viral" className="text-yellow-400 hover:text-yellow-300">View All →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {viral.map((item) => (
              <Link to={`/viral/${item._id}`} key={item._id}>
                <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500 transition">
                  <img
                    src={item.images?.[0]?.url || item.image || 'https://via.placeholder.com/300x200'}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-yellow-300">{item.title}</h3>
                    <p className="text-sm text-zinc-300 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;