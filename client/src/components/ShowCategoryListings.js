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
            <div className="cell small-6 medium-3 large-2 container-tile">
                <div className="listing-tile">
                    {listing.image && <img src={listing.image} />}
                    <h5>{listing.title}</h5>
                    <h3>{listing.price}$</h3>
                </div>
            </div>

        )
    });

    return (
        <div className="category-listings">
            <h3>Listings under {category}: </h3><br></br>
            <ul className="tiles grid-x">
                {filteredListings}
            </ul>
        </div>

    )
}

export default ShowCategoryListings