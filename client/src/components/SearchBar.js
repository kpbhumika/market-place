import React, { useState, useEffect } from 'react'
import getAllListings from '../apiClient/getAllListings';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const [listings, setListings] = useState([]);

    useEffect(() => {
        getAllListings().then(fetchedListings => {
            setListings(fetchedListings);
        });
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    const filteredListings = listings.filter(listing => {
        return listing.title.includes(searchInput);
    });

    const allListings = filteredListings.map((listing) => {
        return (
            <li key={listing.id}>{listing.title}</li>
        )
    })

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput}
            />
            <ul>
                {searchInput && allListings}
            </ul>

        </div>
    );

};

export default SearchBar