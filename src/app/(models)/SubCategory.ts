import mongoose, { Document, Schema } from 'mongoose';

interface ISubCategory extends Document {
    categoryId: string,
    subCategoryName: string;
    subCategoryLabel: string;
    iconUrl: string;
    orderNo: number;
}

const SubCategoryScheme: Schema = new Schema({
    categoryId: { type: String, required: true },
    subCategoryName: { type: String, required: true },
    subCategoryLabel: { type: String, required: true },
    iconUrl: { type: String, required: true },
    orderNo: { type: Number },
});

const SubCategory = mongoose.models.SubCategory || mongoose.model<ISubCategory>('SubCategory', SubCategoryScheme);

export default SubCategory;
