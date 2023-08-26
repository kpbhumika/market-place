import React, { useEffect, useState } from "react";
import UserListingTile from "./UserListingTile";
import getUserListing from "../apiClient/getUserListing";
import { Redirect } from "react-router-dom";


const UserListing = (props) => {
    const [userListings, setUserListings] = useState([])
    const [markAsSold, setMarkAsSold] = useState(false)

    useEffect(() => {
        getUserListing().then(listings => {
            setUserListings(listings)
        })
    }, [markAsSold])

    const handleTileClick = (event) => {
        event.preventDefault()
        { <Redirect push to={`/listing/:id`} /> }
    }

    const listings = userListings.map((listing) => {
        return <UserListingTile
            key={listing.id}
            listing={listing}
            userListings={userListings}
            setUserListings={setUserListings}
            setMarkAsSold={setMarkAsSold}
            handleTileClick={handleTileClick}
        />
    });



    return (
        <div className="user-listing tiles ">
            {userListings.length === 0 ? "You don't have any listings yet." : (
                <div className="grid-x">
                    {listings}
                </div>

            )}
        </div>
    )
}

export default UserListing
