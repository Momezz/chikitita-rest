import { Schema, model } from 'mongoose';

export interface ImageBankDocument extends Document {
  imageTitle: String;
  imageUrl: String;
}

const imagebankSchema = new Schema({
  imageTitle: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    require: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const ImageBank = model<ImageBankDocument>('ImageBank', imagebankSchema);

export default ImageBank;
