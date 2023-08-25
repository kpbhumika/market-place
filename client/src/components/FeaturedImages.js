import React, { useState, useEffect } from "react";
import getAllListings from "../apiClient/getAllListings";
import { Link } from "react-router-dom";

const FeaturedImages = () => {
    const [listings, setListings] = useState([])

    const featuredImages = listings.map((listing) => {
        if (listing.image) {
            return (
                <li className="column" key={listing.id}>
                    <Link to={`/product/${listing.id}`}><img src={listing.image} alt="Featured" /></Link>
                </li>
            );
        }
    })

    useEffect(() => {
        getAllListings().then(listings => {
            setListings(listings)
        })
    }, [])

    return (
        <ul className="row">
            {featuredImages}
        </ul>
    )
}

export default FeaturedImages