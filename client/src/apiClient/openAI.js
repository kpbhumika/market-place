
const isListingSafe = async (newListing) => {
    try {
        const encoded = encodeURIComponent(newListing.description || "")
        const response = await fetch(`/api/v1/openAI?description=${encoded}`)
        if (!response.ok) {
            throw new Error(`${response.status} (${response.statusText})`);
        }
        const responseData = await response.json();
        return responseData.safetyCheck ?? null
    } catch (error) {
        console.error("Error in fetch!");
        console.error(error.message);
        return null
    }
}

export default isListingSafe