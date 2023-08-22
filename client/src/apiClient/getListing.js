const getListing = async (listingId) => {
    try {
        const response = await fetch(`/api/v1/listings/${listingId}`)
        if (!response.status) {
            const error = new Error(`${response.status} (${response.statusText})`);
            throw error;
        }
        const responseData = await response.json();
        return responseData.listing
    } catch (error) {
        console.error("Error in fetch!");
        console.error(error.message);
    }
}

export default getListing