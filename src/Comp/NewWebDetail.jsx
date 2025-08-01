import { useParams, Link } from 'react-router-dom';
import newwebData from '../assets/newweb.json';

const NewWebDetail = () => {
  const { id } = useParams();
  const item = newwebData.find(obj => obj.id === parseInt(id));

  if (!item) {
    return (
      <div className="text-white text-center py-20">
        <h2 className="text-3xl font-bold text-red-500">Oops! Content not found.</h2>
        <Link to="/newweb" className="text-pink-400 underline mt-4 block">Back to Web List</Link>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white px-4 py-10">
        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-lg overflow-hidden">
          {/* Full Width & Height Image */}
          <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-pink-500 mb-4">{item.title}</h1>
            <p className="text-zinc-300 text-lg leading-relaxed">{item.content}</p>
            <Link to="/newweb" className="text-pink-400 underline block mt-6">⬅️ Back to Web List</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewWebDetail;
