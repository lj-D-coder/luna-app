// File: models/Search.ts

import mongoose, { Document, Schema } from 'mongoose';

interface ISearch extends Document {
    keyword: string[];
    urlSlug: string;
}

const SearchSchema: Schema = new Schema({
    keyword: { type: [String], required: true },
    urlSlug: { type: String, required: true },
});

const Search = mongoose.models.Search || mongoose.model<ISearch>('Search', SearchSchema);

export default Search;
