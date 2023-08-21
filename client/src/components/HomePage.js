import React, { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import CategoryListings from "./CategoryListings"
import getAllImages from "../apiClient/getAllImages"

const HomePage = ({ currentUser }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getAllImages().then(images => {
            setImages(images)
        })
    }, [])

    console.log("images", images)
    const featuredImages = images.map((image) => {
        return (
            <li>
                {image.image && <img src={image.image} />}
            </li>
        )

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
                <ul>
                    {featuredImages}
                </ul>
            </div>
            <div className="welcome-page">
                <h5 >Welcome to MarketMingle App – Your Destination for Discovery and Deals! Browse, buy, and sell a wide range of products and services. Start exploring, connecting, and discovering today!</h5>
            </div>
        </div>
    )
}

export default HomePage