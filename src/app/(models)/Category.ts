import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
    categeoryName: string;
    categeoryLabel: string;
    IconUrl: string;
    subCategory: Array<string>
}

const CategorySchema: Schema = new Schema({
    categeoryName: { type: String, required: true },
    IconUrl: { type: String, required: true },
    subCategory: { type: Array, required: true }
});

const Category = mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
