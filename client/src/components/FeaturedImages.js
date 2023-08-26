import React, { useState, useEffect } from "react";
import getAllListings from "../apiClient/getAllListings";
import Modal from "react-modal";

const FeaturedImages = () => {
    const [listings, setListings] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedListing, setSelectedListing] = useState({})

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
                            <div className="full-image cell small-8">
                                {selectedListing.image && <img src={selectedListing.image} />}
                            </div>
                            <div className="image-listing-details cell small-4">
                                <h4>{selectedListing.title} - {selectedListing.price}$</h4>
                                <p>{selectedListing.description}</p>
                                {selectedListing.condition && <p>Condition : {selectedListing.condition}</p>}
                            </div>

                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default FeaturedImages;
