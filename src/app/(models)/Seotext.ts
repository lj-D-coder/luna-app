import mongoose, { Document, Schema } from 'mongoose';

interface ISeotext extends Document {
    text: Array<String>
}

const SeotextSchema: Schema = new Schema({
    text: { type: Array, required: true },
});

const Seotext = mongoose.models.Seotext || mongoose.model('Seotext', SeotextSchema);

export default Seotext;
