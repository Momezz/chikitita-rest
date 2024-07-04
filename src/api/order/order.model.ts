import { Schema, model } from 'mongoose';

export interface OrderDocument extends Document {
  name: String;
  adress: String;
  orderPrice: String;
  ceatedAT: Date;
  updateAT: Date;
}

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  orderPrice: {
    type: Number,
    required: true,
  },
  orderDescription: {
    type: Schema.Types.ObjectId,
    ref: 'ServiceOffer',
  }

}, {
  timestamps: true,
  versionKey: false,
});

const Order = model<OrderDocument>('Order', OrderSchema);
export default Order;
