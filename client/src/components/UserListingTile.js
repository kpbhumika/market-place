import React from "react";
import deleteUserListing from "../apiClient/deleteUserListing";
import markAsSold from "../apiClient/markAsSold";

const UserListingTile = ({ listing, userListings, setUserListings, setMarkAsSold }) => {

    const handleDelete = (id) => {
        deleteUserListing(id)
        setUserListings(userListings.filter((listing) => listing.id !== id))
    }

    const handleSold = (id) => {
        markAsSold(id)
        setMarkAsSold(true)
    }

    return (
        <div key={listing.id}>
            <li>
                <h4>{listing.title} - {listing.price}$</h4>
                <p>{listing.description}</p>
                {listing.condition && <p>Condition : {listing.condition}</p>}
                {listing.sold && <p>( This item has been sold )</p>}
                <div className="user-listing-button">
                <button className="button delete" type="button" onClick={() => handleDelete(listing.id)}>Delete</button>
                {!listing.sold && <button className="button sold" type="button" onClick={() => handleSold(listing.id)}>Mark as Sold</button>}
                </div>
                <br></br>
                <br></br>
            </li>
        </div>
    );
}

export default UserListingTile

