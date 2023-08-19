const getCategories = async () => {
    try {
        const response = await fetch("/api/v1/categories")
        if (!response.status) {
            const error = new Error(`${response.status} (${response.statusText})`);
            throw error;
        }
        const responseData = await response.json();
        return responseData.categories
    } catch (error) {
        console.error("Error in fetch!");
        console.error(error.message);
    }
}

export default getCategories