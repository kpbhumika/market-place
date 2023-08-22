import React, {useState, useEffect} from "react";
import getListing from "../apiClient/getListing";
import { useParams } from "react-router-dom";


const ImageListing = () => {

    const [listing, setListing] = useState({
        title: "",
        price: "",
        description: "",
        condition: "",
        image: {}
    })
    const { listingId } = useParams();

    useEffect(() => {
        getListing(listingId).then(listing => {
            setListing(listing)
        })
    }, [])

    return (
        <div className="image-listing">
                <h4>{listing.title} - {listing.price}$</h4>
                <p>{listing.description}</p>
                {listing.condition && <p>Condition : {listing.condition}</p>}
                {listing.image && <img src={listing.image} />}
        </div>
    )
}

export default ImageListing