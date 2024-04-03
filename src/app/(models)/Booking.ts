import mongoose, { Document, Schema } from 'mongoose';

interface IBooking extends Document {
  name: string;
  date: String;
  time: string;
  phoneNo: string;
}

const BookingSchema: Schema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  phoneNo: { type: String, required: true },
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);

export default Booking;
