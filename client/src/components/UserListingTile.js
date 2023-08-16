import React from "react";
import deleteUserListing from "../apiClient/deleteUserListing";

const UserListingTile = ({ listing, userListings, setUserListings }) => {

    const handleDelete = (id) => {
        deleteUserListing(id)
        setUserListings(userListings.filter((listing) => listing.id !== id))
    }

    return (
        <div key={listing.id}>
            <li>
                <h4>{listing.title} - {listing.price}$</h4>
                <p>{listing.description}</p>
                {listing.condition && <p>Condition - {listing.condition}</p>}
                <button className="button delete" type="button" onClick={() => handleDelete(listing.id)}>Delete</button>
                <br></br>
                <br></br>
            </li>
        </div>
    );
}

export default UserListingTile

