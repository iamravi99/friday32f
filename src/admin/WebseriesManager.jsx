import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Adminnav from './Adminnav';
import RichEditor from './RichEditor';

const WebseriesManager = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', content: '', images: [], rating: '', category: '', platform: '' });
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/webseries');
      setData(res.data);
    } catch (error) {
      alert('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newItem.title) return alert('Title is required');
    try {
      await api.post('/webseries', newItem);
      setNewItem({ title: '', content: '', images: [], rating: '', category: '', platform: '' });
      fetchData();
      alert('Added successfully!');
    } catch (error) {
      alert('Error adding item');
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/webseries/${editItem._id}`, editItem);
      setEditItem(null);
      fetchData();
      alert('Updated successfully!');
    } catch (error) {
      alert('Error updating item');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure?')) return;
    try {
      await api.delete(`/webseries/${id}`);
      fetchData();
      alert('Deleted successfully!');
    } catch (error) {
      alert('Error deleting item');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Adminnav />
      <div className="p-8">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">🎬 Manage Webseries</h2>

      {/* Add Form */}
      <div className="bg-zinc-900 p-4 rounded mb-6">
        <h3 className="text-lg font-bold mb-3">Add New Webseries</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Title*" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
          <input type="text" placeholder="Category" value={newItem.category} onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
          <input type="text" placeholder="Platform" value={newItem.platform} onChange={(e) => setNewItem({ ...newItem, platform: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
          <input type="number" placeholder="Rating (1-10)" value={newItem.rating} onChange={(e) => setNewItem({ ...newItem, rating: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
        </div>
        <div className="col-span-2">
          <RichEditor
            content={newItem.content}
            onChange={(content) => setNewItem({ ...newItem, content })}
            images={newItem.images}
            onImagesChange={(images) => setNewItem({ ...newItem, images })}
          />
        </div>
        <button onClick={handleAdd} className="bg-pink-600 px-4 py-2 rounded mt-3">Add Webseries</button>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg w-[800px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-3">Edit Webseries</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Title" value={editItem.title} onChange={(e) => setEditItem({ ...editItem, title: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white" />
              <input type="text" placeholder="Category" value={editItem.category || ''} onChange={(e) => setEditItem({ ...editItem, category: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white" />
              <input type="text" placeholder="Platform" value={editItem.platform || ''} onChange={(e) => setEditItem({ ...editItem, platform: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white" />
              <input type="number" placeholder="Rating" value={editItem.rating || ''} onChange={(e) => setEditItem({ ...editItem, rating: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white" />
              <RichEditor
                content={editItem.content || ''}
                onChange={(content) => setEditItem({ ...editItem, content })}
                images={editItem.images || []}
                onImagesChange={(images) => setEditItem({ ...editItem, images })}
              />
            </div>
            <div className="flex gap-2 mt-4">
              <button onClick={handleUpdate} className="bg-green-600 px-4 py-2 rounded">Update</button>
              <button onClick={() => setEditItem(null)} className="bg-gray-600 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Data Grid */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item._id} className="bg-zinc-900 p-4 rounded shadow">
              {item.images && item.images.length > 0 && <img src={item.images[0].url} alt={item.title} className="h-40 w-full object-cover rounded mb-2" />}
              <h3 className="text-lg font-bold">{item.title}</h3>
              <div className="text-sm text-gray-400 line-clamp-3" dangerouslySetInnerHTML={{ __html: item.content }}></div>
              <p className="text-xs text-blue-400">Category: {item.category}</p>
              <p className="text-xs text-green-400">Platform: {item.platform}</p>
              <p className="text-xs text-yellow-400">Rating: {item.rating}/10</p>
              <div className="flex gap-2 mt-3">
                <button onClick={() => setEditItem(item)} className="bg-blue-600 px-3 py-1 rounded text-sm">Edit</button>
                <button onClick={() => handleDelete(item._id)} className="bg-red-600 px-3 py-1 rounded text-sm">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default WebseriesManager;