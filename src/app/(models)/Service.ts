import mongoose, { Document, Schema } from 'mongoose';

interface IService extends Document {
  subCategory: string;
  title: string;
  description: string;
  price: number;
  serviceDetails: string;
  discountPercentage: number;
  rating: number;
  serviceCapacity: number;
  supportedModel: string[];
  category: string;
  thumbnail: string;
  images: string[];
}

const ServiceSchema: Schema = new Schema({
  subCategory: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  serviceDetails: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  serviceCapacity: { type: Number, required: true },
  supportedModel: { type: [String], required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: { type: [String], required: true },
});

const Service = mongoose.models.Service || mongoose.model('Service', ServiceSchema);

export default Service;
