import React, { useEffect, useState } from "react";
import UserListingTile from "./UserListingTile";
import getUserListing from "../apiClient/getUserListing";

const UserListing = (props) => {
    const [userListings, setUserListings] = useState([])
    const [markAsSold , setMarkAsSold] = useState(false)

    useEffect(() => {
        getUserListing().then(listings => {
            setUserListings(listings)
        })
    }, [markAsSold])

    const listings = userListings.map((listing) => {
        return <UserListingTile
            listing={listing}
            userListings={userListings}
            setUserListings={setUserListings}
            setMarkAsSold={setMarkAsSold}
        />
    });

    return (
        <div className="user-listing">
            {userListings.length === 0 ? "You don't have any listings yet." : (
                <ul>
                    {listings}
                </ul>
            )}
        </div>
    )
}

export default UserListing
