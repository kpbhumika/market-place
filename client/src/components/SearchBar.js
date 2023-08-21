import React, { useState } from 'react'
import { Redirect } from "react-router-dom";

const SearchBar = () => {

    const [query, setQuery] = useState("");
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter'  && query) {
          event.preventDefault();
          setShouldRedirect(true)
        }
      };

      if (shouldRedirect) {
        return <Redirect push to={`/listings/${query}`} />
    }

    return (
            <div className="search-bar">
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search products, location"
                    onChange={(event) => setQuery(event.target.value)}
                    onKeyDown={handleKeyPress}
                    value={query}
                />
            </div>
    );
};

export default SearchBar