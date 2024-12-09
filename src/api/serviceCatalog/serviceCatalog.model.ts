import { Schema, model } from 'mongoose';

export interface ServiceCatalogDocument extends Document {
  image: String;
  servicecatalogTitle: String;
  price: Number;
  priceOnOffer: Number;
}

const servicecatalogSchema = new Schema({
  image: {
    type: String,
    require: true,
  },
  servicecatalogTitle: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  priceOnOffer: {
    type: String,
    required: true,
  },
  
}, {
  timestamps: true,
  versionKey: false,
});

const ServiceCatalog = model<ServiceCatalogDocument>('ServiceCatalog', servicecatalogSchema);

export default ServiceCatalog;
