import React from "react";

const UserListingTile = ({listing}) => {
    return (
        <div key={listing.id}>
            <li>
                <h4>{listing.title} - {listing.price}$</h4>
                <p>{listing.description}</p>
                {listing.condition &&  <p>Condition - {listing.condition}</p>}
                <br></br>
            </li>
        </div>
    );
}

export default UserListingTile

