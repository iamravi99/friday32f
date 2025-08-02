import React, { useState } from 'react';

const RichEditor = ({ content, onChange, images, onImagesChange }) => {
  const [newImage, setNewImage] = useState({ url: '', position: 'top', caption: '' });

  const addImage = () => {
    if (!newImage.url) return;
    const updatedImages = [...(images || []), newImage];
    onImagesChange(updatedImages);
    setNewImage({ url: '', position: 'top', caption: '' });
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    onImagesChange(updatedImages);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    const text = prompt('Enter link text:');
    if (url && text) {
      const linkHtml = `<a href="${url}" target="_blank" class="text-pink-400 underline hover:text-pink-300">${text}</a>`;
      onChange(content + linkHtml);
    }
  };

  const insertBold = () => {
    const text = prompt('Enter bold text:');
    if (text) {
      onChange(content + `<strong class="font-bold">${text}</strong>`);
    }
  };

  return (
    <div className="space-y-4">
      {/* Content Editor */}
      <div>
        <label className="block text-sm font-medium mb-2">Content</label>
        <div className="flex gap-2 mb-2">
          <button type="button" onClick={insertLink} className="bg-blue-600 px-3 py-1 rounded text-xs">🔗 Link</button>
          <button type="button" onClick={insertBold} className="bg-green-600 px-3 py-1 rounded text-xs">B Bold</button>
        </div>
        <textarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full p-3 rounded bg-zinc-800 text-white h-32"
          placeholder="Enter content with HTML tags for links: <a href='url'>text</a>"
        />
      </div>

      {/* Images Manager */}
      <div>
        <label className="block text-sm font-medium mb-2">Images</label>
        
        {/* Add New Image */}
        <div className="bg-zinc-800 p-4 rounded mb-4">
          <h4 className="font-medium mb-2">Add New Image</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <input
              type="text"
              placeholder="Image URL"
              value={newImage.url}
              onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
              className="p-2 rounded bg-zinc-700 text-white"
            />
            <select
              value={newImage.position}
              onChange={(e) => setNewImage({ ...newImage, position: e.target.value })}
              className="p-2 rounded bg-zinc-700 text-white"
            >
              <option value="top">Top</option>
              <option value="middle">Middle</option>
              <option value="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
            <input
              type="text"
              placeholder="Caption (optional)"
              value={newImage.caption}
              onChange={(e) => setNewImage({ ...newImage, caption: e.target.value })}
              className="p-2 rounded bg-zinc-700 text-white"
            />
          </div>
          <button type="button" onClick={addImage} className="bg-pink-600 px-4 py-2 rounded mt-2">Add Image</button>
        </div>

        {/* Current Images */}
        {images && images.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Current Images:</h4>
            {images.map((img, index) => (
              <div key={index} className="bg-zinc-800 p-3 rounded flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={img.url} alt="" className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="text-sm">{img.caption || 'No caption'}</p>
                    <p className="text-xs text-gray-400">Position: {img.position}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="bg-red-600 px-2 py-1 rounded text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RichEditor;