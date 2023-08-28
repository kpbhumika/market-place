const getMessages = async (chatId) => {
    try {
        const response = await fetch(`/api/v1/messages/${chatId}`)
        if (!response.status) {
            const error = new Error(`${response.status} (${response.statusText})`);
            throw error;
        }
        const responseData = await response.json();
        return responseData.messages
    } catch (error) {
        console.error("Error in fetch!");
        console.error(error.message);
    }
}

export default getMessages