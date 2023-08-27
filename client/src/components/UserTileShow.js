import React from "react";
import { useParams } from "react-router-dom";


const UserTileShow = () => {
    const slicedDesc = listing.description.slice(0, 12)
    slicedDesc += "..."
    return (
        <div className="listing-show">
            {listing.image && <img src={listing.image} />}
            <h5>{listing.title}</h5>
            <h6>{slicedDesc}</h6>
            <h3>{listing.price}$</h3>
            {listing.condition && <p>Condition : {listing.condition}</p>}
            {listing.sold && <p>( This item has been sold )</p>}
            <div className="user-listing-button">
                <button className="button delete" type="button" onClick={() => handleDelete(listing.id)}><i class="fa-solid fa-trash-can"></i></button>
                {!listing.sold && <button className="button sold" type="button" onClick={() => handleSold(listing.id)}>Mark as Sold</button>}
            </div>
            <br></br>
            <br></br>
        </div>
    );
}

export default UserTileShow

