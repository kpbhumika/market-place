import React, { useEffect, useState } from "react";
import UserListingTile from "./UserListingTile";
import getUserListing from "../apiClient/getUserListing";

const UserListing = (props) => {
    const [userListings, setUserListings] = useState([])

    useEffect(() => {
        getUserListing().then(listings => {
            setUserListings(listings)
        })
    }, [])

    const listings = userListings.map((listing) => {
        return <UserListingTile listing={listing} />
    });

    return (
        <div className="user-listing">
            <ul>
                {listings}
            </ul>
        </div>
    )
}

export default UserListing
