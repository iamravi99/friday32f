import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DesiLeakDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/desileaks/${id}`)
      .then(res => {
        setItem(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching desi leak detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-white py-10">Loading...</p>;
  }

  if (!item) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Leak not found!</h2>
        <Link to="/desileaks" className="text-pink-400 underline mt-4 block">Back to Leaks</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6">
          <h1 className="text-4xl font-bold text-pink-500 mb-4">{item.title}</h1>
          <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-line">{item.content || item.desc}</p>
          <Link to="/desileaks" className="text-pink-400 underline block mt-6">⬅️ Back to All Leaks</Link>
        </div>
      </div>
    </div>
  );
};

export default DesiLeakDetail;
