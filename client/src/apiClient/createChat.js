const createChat = async (sellerId, currentUser) => {

  const chat = {
    sellerId: sellerId,
    buyerId: currentUser
  }

  try {
    const response = await fetch(`/api/v1/chats`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(chat)
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw error
    } else {
      const responseBody = await response.json()
      return responseBody.chat
    }
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`)
  }
}

export default createChat