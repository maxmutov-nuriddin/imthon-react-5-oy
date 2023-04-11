import { useContext, useState } from "react";
import { FetchContext } from "../context/Context";
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from "./exap";
import 'swiper/css';
import { Link } from "react-router-dom";



const Search = () => {
  const { data } = useContext(FetchContext);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const results = data.filter((item) => {
      if (handleSearch === '') {
        return value;
      } else if (item.video.title.toLowerCase().includes(query.toLowerCase())) {
        return item
      }
    });
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          {searchResults.map((item) => (
            <Link to={`/card/${item.video.videoId}`}>
              <div key={item.video.videoId}>
                <h3>{item.video.title}</h3>
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              </div>
            </Link>
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