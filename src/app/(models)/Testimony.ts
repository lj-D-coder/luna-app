import mongoose, { Document, Schema } from 'mongoose';

interface ITestimony extends Document {
    _id: string
    name: string;
    profilePhoto: string;
    textDescription: string;
    videoUrl: string;
    rating: number;
    thumbnail: string;
    designation: string
}

const TestimonySchema: Schema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    profilePhoto: { type: String, required: true },
    textDescription: { type: String, required: true },
    videoUrl: { type: String, required: true },
    rating: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    designation: { type: String, required: true },
});

const Testimony = mongoose.models.Testimony || mongoose.model<ITestimony>('Testimony', TestimonySchema);

export default Testimony;
