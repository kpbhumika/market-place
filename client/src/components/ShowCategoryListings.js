import React, { useState, useEffect } from "react";
import getCategoryListings from "../apiClient/getCategoryListings";
import { useParams } from "react-router-dom";

const ShowCategoryListings = (props) => {
    const { category } = useParams()
    const [categoryListings, setCategoryListings] = useState([])

    useEffect(() => {
        getCategoryListings(category).then(listings => {
            setCategoryListings(listings)
        })
    }, [])

    const filteredListings = categoryListings.map((listing) => {
        return (
            <li>
                <h4>{listing.title} - {listing.price}$</h4>
                <p>{listing.description}</p>
                {listing.condition && <p>Condition : {listing.condition}</p>}
                <p>Location : {listing.location}</p>
                {listing.image && <img src={listing.image} />}
                <br></br>
            </li>
        )
    });

    return (
        <div className="category-listings">
            <h3>Listings under {category}: </h3><br></br>
            <ul>
                {filteredListings}
            </ul>
        </div>

    )
}

export default ShowCategoryListings