import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import Adminnav from './Adminnav';
import RichEditor from './RichEditor';

const UlluActressManager = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', desc: '', images: [] });
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/actresses');
      setData(res.data);
    } catch (error) {
      alert('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newItem.name || !newItem.desc) {
      return alert('Name and description are required');
    }
    try {
      await api.post('/actresses', newItem);
      setNewItem({ name: '', desc: '', images: [] });
      fetchData();
      alert('Added successfully!');
    } catch (error) {
      alert('Error adding item');
    }
  };

  const handleUpdate = async () => {
    try {
      await api.put(`/actresses/${editItem._id}`, editItem);
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
      await api.delete(`/actresses/${id}`);
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
        <h2 className="text-2xl font-bold text-pink-500 mb-4">🌟 Manage Ullu Actresses</h2>

      {/* Add Form */}
      <div className="bg-zinc-900 p-4 rounded mb-6">
        <h3 className="text-lg font-bold mb-3">Add New Actress</h3>
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name*" value={newItem.name} onChange={(e) => setNewItem({ ...newItem, name: e.target.value })} className="p-2 rounded bg-zinc-800 text-white" />
        </div>
        <RichEditor
          content={newItem.desc}
          onChange={(desc) => setNewItem({ ...newItem, desc })}
          images={newItem.images}
          onImagesChange={(images) => setNewItem({ ...newItem, images })}
        />
        <button onClick={handleAdd} className="bg-pink-600 px-4 py-2 rounded mt-3">Add Actress</button>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg w-[800px] max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-bold mb-3">Edit Actress</h3>
            <div className="space-y-3">
              <input type="text" placeholder="Name" value={editItem.name} onChange={(e) => setEditItem({ ...editItem, name: e.target.value })} className="w-full p-2 rounded bg-zinc-800 text-white" />
              <RichEditor
                content={editItem.desc || ''}
                onChange={(desc) => setEditItem({ ...editItem, desc })}
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
              {item.images && item.images.length > 0 && <img src={item.images[0].url} alt={item.name} className="h-40 w-full object-cover rounded mb-2" />}
              <h3 className="text-lg font-bold">{item.name}</h3>
              <div className="text-sm text-gray-400 mb-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
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

export default UlluActressManager;