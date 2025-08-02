import React from 'react';

const ContentRenderer = ({ content, images }) => {
  const renderImages = (position) => {
    if (!images || images.length === 0) return null;
    
    const positionImages = images.filter(img => img.position === position);
    if (positionImages.length === 0) return null;

    return (
      <div className={`my-4 ${position === 'left' ? 'float-left mr-4' : position === 'right' ? 'float-right ml-4' : ''}`}>
        {positionImages.map((img, index) => (
          <div key={index} className="mb-4">
            <img 
              src={img.url} 
              alt={img.caption || ''} 
              className={`rounded-lg ${position === 'left' || position === 'right' ? 'w-64' : 'w-full'} h-auto`}
            />
            {img.caption && (
              <p className="text-sm text-gray-400 mt-1 italic">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="prose prose-invert max-w-none">
      {renderImages('top')}
      
      <div className="content-body">
        {renderImages('left')}
        {renderImages('right')}
        
        <div 
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        
        {renderImages('middle')}
      </div>
      
      {renderImages('bottom')}
      
      <div className="clear-both"></div>
    </div>
  );
};

export default ContentRenderer;