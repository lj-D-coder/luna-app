import mongoose, { Document, Schema } from 'mongoose';

interface IOffer extends Document {
    _id: string;
    title: string;
    thumbnail: string;
    price: number;
    serviceCapacity: number;
    images: string[];
    offerDetails: string;
    __v: number;
}

const OfferSchema: Schema = new Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    serviceCapacity: { type: Number, required: true },
    images: { type: [String], required: true },
    offerDetails: { type: String, required: true },
    __v: { type: Number, required: true },
});

const Offer = mongoose.models.Offer || mongoose.model<IOffer>('Offer', OfferSchema);

export default Offer;
