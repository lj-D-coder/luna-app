import mongoose, { Document, Schema } from 'mongoose';

interface ICategory extends Document {
    _id: string;
    categoryId: number
    categoryName: string;
    categoryLabel: string;
    iconUrl: string;
}

const CategorySchema: Schema = new Schema({
    _id: { type: String, required: true },
    categoryName: { type: String, required: true },
    categoryId: { type: Number, required: true },
    categoryLabel: { type: String, required: true },
    iconUrl: { type: String, required: true },
    orderNo: { type: Number, required: true },
});

const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);

export default Category;
