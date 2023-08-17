import React, { useEffect, useState } from "react";
import getFilteredListings from "../apiClient/getFilteredListings";
import { useParams } from "react-router-dom";

const ShowListings = (props) => {

    const [listings, setListings] = useState([])
    const { query } = useParams();

    useEffect(() => {
        getFilteredListings(query).then(listings => {
            setListings(listings)
        })
    }, [])

    const filteredListings = listings.map((listing) => {
        return (
            <li>
                <h4>{listing.title} - {listing.price}$</h4>
                <p>{listing.description}</p>
                {listing.condition && <p>Condition - {listing.condition}</p>}
                <br></br>
                <br></br>
            </li>
        )
    });

    return (
        <div className="filtered-listing">
            {filteredListings.length === 0 ? "There are no listings matching your search." : (
                <ul>
                    <h4>Listings matching "{query}" :</h4><br></br>
                    {filteredListings}
                </ul>
            )}
        </div>
    )
}

export default ShowListings