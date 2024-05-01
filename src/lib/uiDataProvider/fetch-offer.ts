
export const getOffers = async () => {
    try {
      const response = await fetch('/api/offer');
      return ({ response } );
    } catch (error) {
      console.error(error);
      return({ message: "Error", });
    }
  };