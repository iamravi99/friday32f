import { Link } from 'react-router-dom';
import Adminnav from './Adminnav';

const AdminDashboard = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Adminnav />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-pink-500 mb-6">🛠 Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/singh/webseries" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition">
            <h3 className="text-xl font-bold text-pink-400 mb-2">🎦 Webseries</h3>
            <p className="text-gray-400">Manage web series content</p>
          </Link>
          
          <Link to="/singh/stories" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition">
            <h3 className="text-xl font-bold text-blue-400 mb-2">📚 Stories</h3>
            <p className="text-gray-400">Manage story content</p>
          </Link>
          
          <Link to="/singh/ulluactresses" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition">
            <h3 className="text-xl font-bold text-purple-400 mb-2">🎆 Ullu Actresses</h3>
            <p className="text-gray-400">Manage actress profiles</p>
          </Link>
          
          <Link to="/singh/desileaks" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition">
            <h3 className="text-xl font-bold text-green-400 mb-2">🔥 Desi Leaks</h3>
            <p className="text-gray-400">Manage desi leak content</p>
          </Link>
          
          <Link to="/singh/viral" className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">⚡ Viral Content</h3>
            <p className="text-gray-400">Manage viral posts</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;