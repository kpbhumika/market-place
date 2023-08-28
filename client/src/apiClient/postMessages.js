const postMessages = async (message) => {

    try {
      const response = await fetch(`/api/v1/messages`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(message)
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  export default postMessages