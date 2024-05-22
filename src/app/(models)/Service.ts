import mongoose, { Document, Schema } from 'mongoose';

interface IService extends Document {
  
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  serviceCapacity: number;
  supportedModel: string[];
  images: string[];
  category: string;
  categoryId: string;
  subCategory: string;
  subCategoryId: string;
  serviceDetails: string;
}

const ServiceSchema: Schema = new Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPercentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  serviceCapacity: { type: Number, required: true },
  supportedModel: { type: [String], required: true },
  images: { type: [String], required: true },
  category: { type: String, required: true },
  categoryId: { type: String, required: true },
  subCategory: { type: String, required: true },
  subCategoryId: { type: String, required: true },
  serviceDetails: { type: String, required: true },

});

const Service = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);

export default Service;
