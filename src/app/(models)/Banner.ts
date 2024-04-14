import mongoose, { Document, Schema } from 'mongoose';

interface IBanner extends Document {
    serviceId: number;
    bannerId: number;
    bannerUrl: string;
}

const BannerSchema: Schema = new Schema({
    serviceId: { type: Number, required: true },
    bannerId: { type: String, required: true },
    bannerUrl: { type: String, required: true },
});

const Banner = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);

export default Banner;
