import mongoose, { Document, Schema } from 'mongoose';

interface ICoupon extends Document {
  code: string;
  discount: number;
  expiryDate: Date;
  isActive: boolean;
}

const CouponSchema: Schema = new Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
});

const Coupon = mongoose.models.Coupon || mongoose.model<ICoupon>('Coupon', CouponSchema);

export default Coupon;
