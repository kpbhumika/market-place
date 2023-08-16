const deleteUserListing = async (id) => {
    try {
        const response = await fetch(`/api/v1/userListings/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`${response.status} (${response.statusText})`);
        }
    } catch (error) {
        console.error("Error in fetch!", error.message);
    }
};

export default deleteUserListing