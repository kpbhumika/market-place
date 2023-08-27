
const markAsSoldAPI = async (id) => {
    try {
      const response = await fetch(`/api/v1/userListings/${id}`, {
        method: "PATCH",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
      if (!response.ok) {
        if (response.status === 422) {
          const errorBody = await response.json();
          const newErrors = translateServerErrors(errorBody.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      }
      const responseData = await response.json();
      return responseData.listing
          } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  }

export default markAsSoldAPI