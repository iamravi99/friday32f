import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Adminnav from './Adminnav';
import RichEditor from './RichEditor';

const DesiLeaksManager = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ title: '', desc: '', content: '', images: [] });
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/desileaks');
      setData(res.data);
    } catch (error) {
      alert('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newItem.title || !newItem.desc) {
      return alert('Title and description are required');
    }
    try {
      await api.post('/desileaks', newItem);
      setNewItem({ title: '', desc: '', content: '', images: [] });
      fetchData();
      alert('Added successfully!');
    } catch (error) {
      alert('Error adding item');
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/desileaks/${editItem._id}`, editItem);
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
      await api.delete(`/desileaks/${id}`);
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
        <h2 className="text-2xl font-bold text-pink-500 mb-4">🔥 Manage Desi Leaks</h2>

      {/* Add Form */}
      <div className="bg-zinc-900 p-4 rounded mb-6">
        <h3 className="text-lg font-bold mb-3">Add New Desi Leak</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Title*" value={newItem.title} onChange={(e) => setNewItem({ ...newItem, title: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
          <textarea placeholder="Description*" value={newItem.desc} onChange={(e) => setNewItem({ ...newItem, desc: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
        </div>
        <RichEditor
          content={newItem.content}
          onChange={(content) => setNewItem({ ...newItem, content })}
          images={newItem.images}
          onImagesChange={(images) => setNewItem({ ...newItem, images })}
        />
        <button onClick={handleAdd} className="bg-pink-600 px-4 py-2 rounded mt-3">Add Desi Leak</button>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg w-[800px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-3">Edit Desi Leak</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Title" value={editItem.title} onChange={(e) => setEditItem({ ...editItem, title: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white" />
              <textarea placeholder="Description" value={editItem.desc || ''} onChange={(e) => setEditItem({ ...editItem, desc: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white h-20" />
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
              <div className="text-sm text-gray-400 mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
              {item.content && <p className="text-xs text-blue-400">Has full content</p>}
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

export default DesiLeaksManager;