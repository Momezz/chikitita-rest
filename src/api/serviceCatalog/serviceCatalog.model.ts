import { Schema, model } from 'mongoose';

export interface ServiceCatalogDocument extends Document {
  servicecatalogTitle: String;
  description: String;
  image: String;
}

const servicecatalogSchema = new Schema({
  servicecatalogTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  }
}, {
  timestamps: true,
  versionKey: false,
});

const ServiceCatalog = model<ServiceCatalogDocument>('ServiceCatalog', servicecatalogSchema);

export default ServiceCatalog;
