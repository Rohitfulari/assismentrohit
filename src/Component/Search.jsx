import React, {  useState } from 'react';
import './Search.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]); 
  const navigate = useNavigate();
  

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, per_page: 12 },
        headers: { Authorization: 'Client-ID gj4amP86qLSsb9yNW6d3i9KiX95nz6Y-HU0s0czTtWc' }, // Replace with your API key
      });
      setImages(response.data.results); 
      console.log(response.data.results);
    } catch (error) {
      alert('Something went wrong while fetching images!');
      console.error('Error:', error);
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      fetchImages(); 
    } else {
      alert('Please enter a valid search query!');
    }
  };

  const pagemove =(img) => {
    navigate('/canva', {state:{img}});

  }

  

  return (
    <>
      <h5>Name: ROHIT VIJAY FULARI</h5>
      <h5>Email: rohitfulari2000@gmail.com</h5>

      <div className='Search'>
        <input
          type='text'
          placeholder='Search here...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='search-input'
        />
        <button onClick={handleSearch} className='search-button'>
          Search
        </button>
      </div>

      <div className='image-grid'>
        {images.map((img) => (
          <div key={img.id} className='image-item'>
            <img src={img.urls.small} alt={img.alt_description} />
            <button className='search-button'
            onClick={() => pagemove(img)}>
                ADD CAPTION
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
