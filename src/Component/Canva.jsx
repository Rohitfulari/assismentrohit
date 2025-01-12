import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Canva.css';

const Canva = () => {
  const location = useLocation();
  const { img } = location.state || {}; // Get the selected image data
  const [caption, setCaption] = useState(''); // State to store the caption

  if (!img) {
    return <p>No image data found. Go back to the search page.</p>;
  }

  const handleDownload = () => {
    const image = new Image();
    image.crossOrigin = 'Anonymous';  // Enable cross-origin resource sharing
    image.src = img.urls.regular;
  
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      // Set canvas size to match image size
      canvas.width = image.width;
      canvas.height = image.height;
  
      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0);
  
      // Set the font and position for the caption
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.fillText(caption, 30, image.height - 30); // Caption position can be adjusted
  
      // Convert canvas to image and trigger download
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'image_with_caption.png';
      link.click();
    };
  };
  

  return (
    <div className="canva-container">
      <div className="canva-left">
        <h2>Selected Image</h2>
        <img
          src={img.urls.regular}
          alt={img.alt_description || 'Selected Image'}
          className="canva-image"
        />
      </div>

      <div className="canva-right">
        <h2>Add Caption</h2>
        <textarea
          placeholder="Write your caption here..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="caption-input"
        />
        <p><strong>Preview Caption:</strong> {caption || 'No caption added yet.'}</p>
      </div>

      <button onClick={handleDownload} className="download-button">
        Download Image
      </button>
    </div>
  );
};

export default Canva;

