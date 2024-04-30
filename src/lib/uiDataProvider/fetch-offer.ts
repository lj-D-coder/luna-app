
export const getOffers = async () => {
    try {
      const response = await fetch('/api/offer');
    //   const data = await response.json();
      console.log(response)
      return ({ response } );
    } catch (error) {
      console.error(error);
      return({ message: "Error", });
    }
  };