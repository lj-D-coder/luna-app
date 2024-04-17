// couponHandler.ts
const handleApplyCoupon = async (coupon: string, setDiscount: Function) => {
  try {
    const response = await fetch(`/api/coupon/${coupon}`);
    const data = await response.json();

    if (data.valid) {
      setDiscount(data.discount);
      // alert('Coupon applied successfully');
    } else {
      alert('Invalid coupon');
    }
  } catch (error) {
    console.error(error);
    alert('Error applying coupon');
  }
};

export default handleApplyCoupon;
