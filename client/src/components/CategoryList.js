import React, { useEffect, useState } from "react";
import NewListingForm from "./NewListingForm";
import translateServerErrors from "../services/translateServerErrors"
import { Redirect } from "react-router-dom"


const CategoryList = (props) => {

    const [categoryList, setCategoryList] = useState([])

    const getCategories = async () => {
        try {
            const response = await fetch("/api/v1/categories")
            if (!response.status) {
                const error = new Error(`${response.status} (${response.statusText})`);
                throw error;
            }
            const responseData = await response.json();
            setCategoryList(responseData.categories);
        } catch (error) {
            console.error("Error in fetch!");
            console.error(error.message);
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div>
            <NewListingForm
                categoryList={categoryList}
            />
        </div>
    )
}

export default CategoryList

