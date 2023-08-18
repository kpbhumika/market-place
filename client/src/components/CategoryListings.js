import React, {useState, useEffect} from "react";
import getCategories from "../apiClient/getCategories";
import { Redirect } from "react-router-dom";


const CategoryListings = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [redirect , setRedirect] = useState(false)

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    const categoriesOptions = categories.map((category) => (
        <option key={category.id} value={category.name}>
            {category.name}
        </option>
    ));

    const handleSelect = (category) => {
        setSelectedCategory(category)
        setRedirect(true)
      };

      if (redirect) {
        return <Redirect push to = {`/${selectedCategory}/listings`} />;
    }

      return (
        <div>
            <label>
                    <select
                        className="category-dropdown"
                        value={selectedCategory}
                        onChange={(event) => handleSelect(event.target.value)}>
                        <option value="">Category</option>
                        {categoriesOptions}
                    </select>
                </label>
        </div>
    )
}

export default CategoryListings