import { useContext, useState } from "react";
import { FetchContext } from "../context/Context";
import SearchBar from "./exap";

const Search = () => {
  const { data } = useContext(FetchContext);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = data.filter((item) =>
      item.video.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          {searchResults.map((item) => (
            <div key={item.video.videoId}>
              <h3>{item.video.title}</h3>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Search;