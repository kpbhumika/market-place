import React, { useEffect, useState } from "react";

const UserListing = (props) => {
    const [userListings, setUserListings] = useState([])

    const getUserListing = async () => {
        try {
            const response = await fetch("/api/v1/userListings")
            if (!response.status) {
                const error = new Error(`${response.status} (${response.statusText})`);
                throw error;
            }
            const responseData = await response.json();
            setUserListings(responseData.listings);
        } catch (error) {
            console.error("Error in fetch!");
            console.error(error.message);
        }
    }

    useEffect(() => {
        getUserListing()
    }, [])

    const listings = userListings.map((listing) => {
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
