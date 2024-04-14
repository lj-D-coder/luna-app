import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
    _id: string;
    categoryId: number
    categoryName: string;
    categoryLabel: string;
    IconUrl: string;
    subCategory: Array<string>
}

const CategorySchema: Schema = new Schema({
    _id: { type: String, required: true },
    categoryName: { type: String, required: true },
    categoryId: { type: Number, required: true },
    categoryLabel: { type: String, required: true },
    IconUrl: { type: String, required: true },
    subCategory: { type: Array, required: true }
});

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
