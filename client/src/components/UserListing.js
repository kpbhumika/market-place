import React, { useEffect, useState } from "react";
import UserListingTile from "./UserListingTile";
import getUserListing from "../apiClient/getUserListing";
import Modal from "react-modal";


const UserListing = (props) => {
    const [userListings, setUserListings] = useState([])
    const [markAsSold, setMarkAsSold] = useState(false)
    const [selectedListing, setSelectedListing] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    useEffect(() => {
        getUserListing().then(listings => {
            setUserListings(listings)
        })
    }, [selectedListing])

    const openModal = (listing) => {
        setSelectedListing(listing);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedListing(null);
        setModalIsOpen(false);
    };

    const listings = userListings.map((listing) => {
        return (
            <div className="cell small-6 medium-3 large-2">
                <div className="listing-tile" >
                    <button onClick={() => openModal(listing)}>
                        {listing.image && <img className="image-container listing-image" src={listing.image} />}
                        <div className="listing-details">
                            <h6>{listing.title}</h6>
                            <h3>{listing.price}$</h3>
                        </div>
                    </button>
                </div>
            </div>
        )
    });

    return (
        <div className="user-listing tiles ">
            {userListings.length === 0 ? "You don't have any listings yet." : (
                <>
                    <h3>Your Listings </h3>
                    <div className="tile grid-x grid-margin-x">
                        {listings}
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="User-listing Modal"
                        >
                            <UserListingTile
                                selectedListing={selectedListing}
                                setModalIsOpen={setModalIsOpen}
                                closeModal={closeModal}
                                userListings={userListings}
                                setUserListings={setUserListings}
                                setMarkAsSold={setMarkAsSold}
                                markAsSold={markAsSold} />
                        </Modal>
                    </div>
                </>
            )}
        </div>
    )
}

export default UserListing
