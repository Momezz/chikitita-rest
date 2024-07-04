import { Schema, model } from 'mongoose';

export interface PublicationDocument extends Document {
  publicationTitle: String;
  price: Number
  description: String;
}

const publicationSchema = new Schema({
  publicationTitle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const Publication = model<PublicationDocument>('Publication', publicationSchema);

export default Publication;
