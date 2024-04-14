import mongoose, { Document, Schema } from 'mongoose';

interface IHero extends Document {
    serviceId: number;
    _id: string;
    sliderUrl: string;
    sliderOrder: number;
}

const HeroSchema: Schema = new Schema({
    serviceId: { type: Number, required: true },
    _id: { type: Number, required: true },
    sliderUrl: { type: String, required: true },
    sliderOrder: { type: Number, required: true },
});

const Hero = mongoose.models.Hero || mongoose.model('Hero', HeroSchema);

export default Hero;
