import React, { useState, useEffect } from "react"
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors"
import { Redirect } from "react-router-dom";
import getCategories from "../apiClient/getCategories";
import Dropzone from "react-dropzone"
import isListingSafe from "../apiClient/openAI";
import SafetyReason from "./SafetyReason";
const NewListingForm = () => {

    const [errorMessage, setErrorMessage] = useState("")
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [errors, setErrors] = useState([]);
    const [categories, setCategories] = useState([])
    const [reason, setReason] = useState("")
    const [newListing, setNewListing] = useState({
        title: "",
        description: "",
        price: "",
        condition: "",
        location: "",
        categoryId: "",
        image: {}
    })

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    const postNewListing = async (newListing) => {
        try {
            const response = await fetch(`/api/v1/userListings`, {
                method: "POST",
                headers: new Headers({
                    "Accept": "image/jpeg",
                }),
                body: newListing
            })
            if (!response.ok) {
                if (response.status === 422) {
                    const errorBody = await response.json()
                    const newErrors = translateServerErrors(errorBody.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw error
                }
            } else {
                setErrors([])
                setShouldRedirect(true)
            }
        } catch (error) {
            setErrorMessage("Something went wrong please refresh and try again.")
            console.error("Error in fetch!", error.message);
        }
    };

    if (shouldRedirect) {
        return <Redirect push to="/user/listings" />;
    }

    const categoriesOptions = categories.map((category) => (
        <option key={category.id} value={category.id}>
            {category.name}
        </option>
    ));

    const handleInputChange = event => {
        setNewListing({
            ...newListing,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    const handleImageUpload = (acceptedImage) => {
        setNewListing({
            ...newListing,
            image: acceptedImage[0]
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const safetyCheck = await isListingSafe(newListing)
        if (safetyCheck.isSafe) {
            const newListingBody = new FormData()
            newListingBody.append("title", newListing.title)
            newListingBody.append("description", newListing.description)
            newListingBody.append("price", newListing.price)
            newListingBody.append("condition", newListing.condition)
            newListingBody.append("location", newListing.location)
            newListingBody.append("categoryId", newListing.categoryId)
            newListingBody.append("image", newListing.image)
            postNewListing(newListingBody)
            clearForm(event)
        } else {
            setReason("Cannot add this listing. Reason : " + safetyCheck.reason)
        }
    }

    const handleCategoryChange = (event) => {
        setNewListing({
            ...newListing,
            categoryId: event.target.value
        });
    };

    const clearForm = (event) => {
        event.preventDefault()
        setNewListing({
            title: "",
            description: "",
            price: "",
            condition: "",
            location: "",
            categoryId: "",
            image: {}
        })
    }

    return (
        <div className="grid-x listing-form">

            <div className="cell small-6">
                <div className="form-data">
                    {errorMessage ? (
                        <div className="error-message">{errorMessage}</div>
                    ) : (
                        <>
                            <ErrorList errors={errors} />
                            <h4> Add new listing </h4>
                            <form onSubmit={handleSubmit}>
                                <label>
                                    Title
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleInputChange}
                                        value={newListing.title}
                                    />
                                </label>
                                <label>
                                    Description
                                    <input
                                        type="text"
                                        name="description"
                                        onChange={handleInputChange}
                                        value={newListing.description}
                                    />
                                </label>
                                <label>
                                    Price
                                    <input
                                        type="text"
                                        name="price"
                                        onChange={handleInputChange}
                                        value={newListing.price}
                                    />
                                </label>
                                <label>
                                    Condition
                                    <input
                                        type="text"
                                        name="condition"
                                        onChange={handleInputChange}
                                        value={newListing.condition}
                                    />
                                </label>
                                <label>
                                    City
                                    <input
                                        type="text"
                                        name="location"
                                        onChange={handleInputChange}
                                        value={newListing.location}
                                    />
                                </label>
                                <label>
                                    Category
                                    <select
                                        className="form-dropdown"
                                        name="category"
                                        onChange={handleCategoryChange}
                                        value={newListing.categoryId}>
                                        <option value="">Select a category</option>
                                        {categoriesOptions}
                                    </select>
                                </label>
                                <Dropzone onDrop={handleImageUpload}>
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()}>
                                                <input {...getInputProps()} />
                                                <p>Upload images - drag 'n' drop or click on this to upload</p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                <div className="form-button">
                                    <input className="button" type="submit" value="Submit" />
                                    <button className="button" type="button" onClick={clearForm}>
                                        Clear
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
            <div className="cell small-5">
                <SafetyReason reason={reason} />
            </div>
        </div>
    )
}

export default NewListingForm