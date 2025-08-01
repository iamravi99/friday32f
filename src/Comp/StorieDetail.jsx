import { useParams, Link } from 'react-router-dom';
import storiesData from '../assets/stories.json';

const StorieDetail = () => {
  const { id } = useParams();
  const story = storiesData.find(s => s.id === parseInt(id));

  if (!story) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Oops! कहानी नहीं मिली।</h2>
        <Link to="/storie" className="text-red-400 underline mt-4 block">⬅️ वापस Stories पर</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-lg p-6">
        <img src={story.image} alt={story.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className="text-4xl font-bold text-red-500 mb-4">{story.title}</h1>
        <p className="text-zinc-300 text-lg leading-relaxed whitespace-pre-line">{story.content}</p>
        <Link to="/" className="text-red-400 underline block mt-6">⬅️ वापस Home पर</Link>
      </div>
    </div>
  );
};

export default StorieDetail;
