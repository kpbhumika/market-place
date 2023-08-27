import React from "react";
import deleteUserListing from "../apiClient/deleteUserListing";
import markAsSold from "../apiClient/markAsSold";

const UserListingTile = ({ listing, userListings, setUserListings, setMarkAsSold, handleTileClick }) => {

    const handleDelete = (id) => {
        deleteUserListing(id)
        setUserListings(userListings.filter((listing) => listing.id !== id))
    }

    const handleSold = (id) => {
        markAsSold(id)
        setMarkAsSold(true)
    }
    let slicedDesc
    if (listing.description.length > 24) {
        slicedDesc = listing.description.slice(0, 34)
        slicedDesc += "....."
    } else {
        slicedDesc = listing.description
    }


    return (
        <div className="cell small-6 medium-3 large-2 container-tile">
            <div className="listing-tile" >
                {listing.image && <img src={listing.image} />}
                <h5>{listing.title}</h5>
                <h6>{slicedDesc}</h6>
                <h6>(Click for more)</h6>
                <h3>{listing.price}$</h3>
                {/* {listing.condition && <p>Condition : {listing.condition}</p>}
                    {listing.sold && <p>( This item has been sold )</p>} */}
                {/* <div className="user-listing-button">
                        <button className="button delete" type="button" onClick={() => handleDelete(listing.id)}><i className="fa-solid fa-trash-can"></i></button>
                        {!listing.sold && <button className="button sold" type="button" onClick={() => handleSold(listing.id)}>Mark as Sold</button>}
                    </div>
                    <br></br>
                    <br></br> */}
            </div>
        </div>
    );
}

export default UserListingTile

