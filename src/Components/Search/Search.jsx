import React, { useState, useEffect } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=phone=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data?.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event?.target?.value);
  };

  useEffect(() => {
    // Fetch data from the API when searchQuery changes
    if (searchQuery.trim() !== '') {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [fetchData]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults?.map((result) => (
            <li key={result?.id}>{result?.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
