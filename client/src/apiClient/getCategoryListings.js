const getCategoryListings = async (category) => {
    try {
        const response = await fetch(`/api/v1/categories/${category}`)
        if (!response.status) {
            const error = new Error(`${response.status} (${response.statusText})`);
            throw error;
        }
        const responseData = await response.json();
        return responseData.listings
    } catch (error) {
        console.error("Error in fetch!");
        console.error(error.message);
    }
}

export default getCategoryListings