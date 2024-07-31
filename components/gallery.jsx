import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('/g/500/300');
      setImages([...images, response.request.responseURL]);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <div>
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Lorem Pixum ${index}`} />
        ))}
      </div>
      <button onClick={getImages}>Load More Images</button>
    </div>
  );
}

export default Gallery;
