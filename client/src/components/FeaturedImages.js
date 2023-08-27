import React, { useState, useEffect } from "react";
import getAllListings from "../apiClient/getAllListings";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import createChat from "../apiClient/createChat";

const FeaturedImages = ({ currentUser }) => {
    const [listings, setListings] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedListing, setSelectedListing] = useState({})
    const [redirect, setRedirect] = useState(false)
    const [chatName, setChatName] = useState("");
    const [chatId, setChatId] = useState("");

    const openModal = (listing) => {
        setSelectedImage(listing.image);
        setModalIsOpen(true);
        setSelectedListing(listing)
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
        setSelectedListing({})
    };

    const handleContactSeller = (event) => {
        event.preventDefault()
        createChat(selectedListing.sellerId, currentUser.id).then((chat) => {
            setChatName(chat.sellerName)
            setChatId(chat.id)
            setRedirect(true)

        })
    }

    const featuredImages = listings.map((listing) => {
        if (listing.image) {
            return (
                <li key={listing.id}>
                    <button onClick={() => openModal(listing)}>
                        <div className="image-container">
                            <img src={listing.image} alt="Featured" />
                        </div>
                    </button>
                </li>
            );
        }
    });

    useEffect(() => {
        getAllListings().then((listings) => {
            setListings(listings);
        });
    }, []);

    return (
        <div>
            <ul className="row">{featuredImages}</ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
            >
                {selectedImage && (
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
            {redirect && <Redirect push to={`/message/${chatName}/${chatId}`} />} {/* Render the Redirect component conditionally */}
        </div>
    );
};

export default FeaturedImages;
