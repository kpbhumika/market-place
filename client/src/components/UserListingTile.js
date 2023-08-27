import React from "react";
import deleteUserListing from "../apiClient/deleteUserListing";
import markAsSoldAPI from "../apiClient/markAsSold";

const UserListingTile = ({ setModalIsOpen, markAsSold, userListings, closeModal, setUserListings, setMarkAsSold, selectedListing }) => {

    const handleDelete = (id) => {
        deleteUserListing(id)
        setUserListings(userListings.filter((listing) => listing.id !== id))
        setModalIsOpen(false)
    }

    const handleSold = (id) => {
        markAsSoldAPI(id)
        setMarkAsSold(true)
    }

    return (
        <div>
            {selectedListing && (
                <div className="modal-content">
                    <button className="close-button" onClick={closeModal}>
                        Close
                    </button>
                    <div className="image-listing grid-x">
                        <div className="full-image cell small-12 large-8">
                            {selectedListing.image && <img src={selectedListing.image} />}
                        </div>
                        <div className="image-listing-details cell small-12 large-4">
                            <h4>{selectedListing.title}</h4>
                            <h4>{selectedListing.price}$</h4>
                            <br></br>
                            <h6>{selectedListing.description}</h6>
                            {selectedListing.condition && <p>Condition : {selectedListing.condition}</p>}
                            {markAsSold && <p>( This item has been marked as sold )</p>}
                            <div className="user-listing-button">
                                <button className="button delete" type="button" onClick={() => handleDelete(selectedListing.id)}><i className="fa-solid fa-trash-can"></i></button>
                                {!markAsSold && <button className="button sold" type="button" onClick={() => handleSold(selectedListing.id)}>Mark as Sold</button>}
                            </div>
                            <br></br>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

export default UserListingTile