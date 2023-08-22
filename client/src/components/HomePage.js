import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import CategoryListings from "./CategoryListings"
import { Link } from "react-router-dom";
import getAllListings from "../apiClient/getAllListings";


const HomePage = ({ currentUser }) => {

    const [listings, setListings] = useState([])

    useEffect(() => {
        getAllListings().then(listings => {
            setListings(listings)
        })
    }, [])

    const featuredImages = listings.map((listing) => {
        if (listing.image) {
            return (
              <li className="column" key={listing.id}>
                    <Link to={`/product/${listing.id}`}><img src={listing.image} alt="Featured" /></Link>
              </li>
            );
          }
    })

    return (
        <div className="homepage">
            <div className="product-discovery">
                {currentUser && <SearchBar />}
                {currentUser && <CategoryListings />}
            </div>
            <div className="user-name">
                {currentUser && <h1>Hi {currentUser.firstName} !!</h1>}
            </div>
            <div className="featured-images">
                <ul className="row">
                    {currentUser && featuredImages}
                </ul>
            </div>
            <div className="welcome-page">
                <h5 >Welcome to MarketMingle App – Your Destination for Discovery and Deals! Browse, buy, and sell a wide range of products and services. Start exploring, connecting, and discovering today!</h5>
            </div>
        </div>
    )
}

export default HomePage