
const isListingSafe = async (newListing) => {
    try {
        const response = await fetch(`/api/v1/openAI?description=${newListing.description}`)
        if (!response.status) {
            const error = new Error(`${response.status} (${response.statusText})`);
            throw error;
        }
        const responseData = await response.json();
        return responseData.safetyCheck
    } catch (error) {
        console.error("Error in fetch!");
        console.error(error.message);
    }
}

export default isListingSafe