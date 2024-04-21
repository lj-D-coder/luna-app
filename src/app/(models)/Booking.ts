import mongoose, { Document, Schema } from 'mongoose';

interface IBookingDetail extends Document {
  serviceId: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  serviceCapacity: number;
  category: string;
  categoryId: string;
  subCategory: string;
}

const BookingDetailSchema: Schema = new Schema({
  serviceId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  serviceCapacity: { type: Number, required: true },
  category: { type: String, required: true },
  categoryId: { type: String, required: true },
  subCategory: { type: String, required: true },
});

interface IBooking extends Document {
  bookingDate: Date;
  phone: string;
  name: string;
  address: string;
  landmark: string;
  timeSlot: string;
  paymentMode: string;
  paymentStatus: string;
  bookingStatus: string;
  billingAmount: number;
  couponValue: number;
  bookingDetails: IBookingDetail[];
}

const BookingSchema: Schema = new Schema({
  bookingDate: { type: Date, required: true },
  phone: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  landmark: { type: String, required: true },
  timeSlot: { type: String, required: true },
  paymentMode: { type: String, default: 'offline' },
  paymentStatus: { type: String,  default: 'pending' },
  bookingStatus: { type: String, default: 'pending' },
  billingAmount: { type: Number, required: true },
  couponValue: { type: Number, default: 0 },
  bookingDetails: { type: [BookingDetailSchema], required: true },
});

const Booking = mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;