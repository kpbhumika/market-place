import React, { useEffect, useState } from "react";
import getFilteredListings from "../apiClient/getFilteredListings";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import createChat from "../apiClient/createChat";

const ShowListings = ({user}) => {

    const [listings, setListings] = useState([])
    const { query } = useParams();
    const [selectedListing, setSelectedListing] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [chatName, setChatName] = useState("");
    const [chatId, setChatId] = useState("");
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        getFilteredListings(query).then(listings => {
            setListings(listings)
        })
    }, [])

    const openModal = (listing) => {
        setSelectedListing(listing);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedListing(null);
        setModalIsOpen(false);
    };

    const handleContactSeller = (event) => {
        event.preventDefault()
        createChat(selectedListing.sellerId, user.id).then((chat) => {
            setChatName(chat.sellerName)
            setChatId(chat.id)
            setRedirect(true)
        })
    }

    const filteredListings = listings.map((listing) => {
        return (
            <div className="cell small-6 medium-3 large-2">
                <div className="listing-tile">
                    <button onClick={() => openModal(listing)}>
                        {listing.image && <img className="image-container" src={listing.image} />}
                        <div className="listing-details">
                            <h5>{listing.title}</h5>
                            <h3>{listing.price}$</h3>
                        </div>
                    </button>
                </div>
            </div>
        )
    });

    return (
        <div className="user-listing tiles ">
            <h3>Listings matching '{query}' </h3><br></br>
            <div className="tile grid-x grid-margin-x"> {filteredListings}
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Image Modal"
                >
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
                                    <h6>Location : {selectedListing.location}</h6>
                                    <br></br>
                                    <button className="button contact-seller" type="button" onClick={handleContactSeller}>Contact Seller</button>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
                {redirect && <Redirect push to={`/message/${chatName}/${chatId}`} />}
            </div>
        </div>
    )
}

export default ShowListings