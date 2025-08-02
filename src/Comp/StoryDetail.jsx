import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const StoryDetail = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/stories/${id}`)
      .then(res => {
        setStory(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching story detail:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center text-white py-10">Loading...</p>;

  if (!story) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Story Not Found</h2>
        <Link to="/stories" className="text-pink-400 underline mt-4 block">Back to Stories</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-6 rounded-xl shadow-lg">
        <img src={story.image} alt={story.title} className="w-full h-[400px] object-cover rounded" />
        <h1 className="text-3xl font-bold text-pink-500 mt-4 mb-2">{story.title}</h1>
        <p className="text-zinc-300 text-lg leading-relaxed">{story.content || story.desc}</p>
        <Link to="/stories" className="text-pink-400 underline block mt-6">⬅️ Back to Stories</Link>
      </div>
    </div>
  );
};

export default StoryDetail;
