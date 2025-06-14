import React, { useState } from 'react';
import axios from 'axios';

const GeoapifyAutocomplete = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const text = e.target.value;
    setQuery(text);

    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get('https://api.geoapify.com/v1/geocode/autocomplete', {
        params: {
          text: text,
          apiKey: '8ee12d0789384440bfd9a7c22d039338', 
        },
      });
      setSuggestions(response.data.features);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelect = (place) => {
    setQuery(place.properties.formatted);
    setSuggestions([]);
    console.log('Selected place:', place);
    onSelect(place); // Pass selected place back to parent
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="w-150 p-2 border rounded"
        value={query}
        onChange={handleInputChange}
        placeholder="Search destination..."
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border mt-1 w-full z-10 max-h-60 overflow-y-auto">
          {suggestions.map((place, idx) => (
            <li
              key={idx}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(place)}
            >
              {place.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GeoapifyAutocomplete;
