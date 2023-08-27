import React from "react"
import SearchBar from "./SearchBar"
import CategoryListings from "./CategoryListings"
import FeaturedImages from "./FeaturedImages"

const HomePage = ({ currentUser }) => {
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
                {currentUser && <FeaturedImages currentUser={currentUser}/>}
            </div>
            <div className="welcome-page">
                <h5 className="welcome-message">Welcome to MarketMingle App – Your Destination for Discovery and Deals! Browse, buy, and sell a wide range of products and services. Start exploring, connecting, and discovering today!</h5>
            </div>
        </div>
    )
}

export default HomePage