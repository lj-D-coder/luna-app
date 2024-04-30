import mongoose from 'mongoose';

interface IOffer {
  title: string;
  image: string;
  price: number;
  offerPrice: number;
  discountPc: number;
  category: string;
  serviceDetails: string;
}

const OfferSchema = new mongoose.Schema<IOffer>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  offerPrice: { type: Number, required: true },
  discountPc: { type: Number, required: true },
  category: { type: String, required: true },
  serviceDetails: { type: String, required: true },
});


const Offer = mongoose.models.Offer || mongoose.model<IOffer>('Offer', OfferSchema);

export default Offer;
