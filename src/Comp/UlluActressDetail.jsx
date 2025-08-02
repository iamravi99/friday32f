import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UlluActressDetail = () => {
  const { id } = useParams();
  const [actress, setActress] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/actresses/${id}`)
      .then(res => {
        setActress(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching actress detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-white py-10">Loading...</p>;
  }

  if (!actress) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Oops! Actress not found.</h2>
        <Link to="/ulluactresses" className="text-pink-400 underline mt-4 block">Back to Actresses</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
          <img
            src={actress.image}
            alt={actress.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="p-6">
          <h1 className="text-4xl font-bold text-pink-500 mb-4">{actress.name}</h1>
          <p className="text-zinc-300 text-lg leading-relaxed">{actress.desc}</p>
          <Link to="/ulluactresses" className="text-pink-400 underline block mt-6">⬅️ Back to Actresses</Link>
        </div>
      </div>
    </div>
  );
};

export default UlluActressDetail;
