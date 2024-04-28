

const validateCategorySlug = async (slug: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/category/${slug}`);
      const data = await response.json();
      console.log(data)
      return ({ data } );
    } catch (error) {
      console.error(error);
      return({ message: "Error", });
    }
  };

export default validateCategorySlug;