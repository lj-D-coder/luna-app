import mongoose, { Document, Schema } from 'mongoose';

interface IEnquiry extends Document {
fullName: string;
phone: string;
address: string;
message: string;
}

const CouponSchema: Schema = new Schema({
    fullName: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    message: { type: String, default: true },
});

const Enquiry = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', CouponSchema);

export default Enquiry;
