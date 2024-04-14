import mongoose, { Document, Schema } from 'mongoose';

interface ISubCategory extends Document {
    parentCategoryId: string,
    parentCategoryName: string,
    subCategoryId: number;
    subCategoryName: string;
    subCategoryLabel: string;
    iconUrl: string;
}

const SubCategoryScheme: Schema = new Schema({
    parentCategoryName: { type: String, required: true },
    subCategoryId: { type: Number, required: true },
    parentCategoryId: { type: String, required: true },
    subCategoryName: { type: String, required: true },
    subCategoryLabel: { type: String, required: true },
    iconUrl: { type: String, required: true },
});

const SubCategory = mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategoryScheme);

export default SubCategory;
