import Order, { OrderDocument } from './order.model';
import { DocumentDefinition } from 'mongoose';

export function getAllOrders() {
  return Order.find({});
}

export function getOrderById(id: string) {
  return Order.findById(id).populate('orderDescription');
}

export function createOrder(input: DocumentDefinition<Omit<OrderDocument, 'createdAt' | 'updatedAt'>>,) {
  return Order.create(input)
}

export function updateOrder(id: string,
  order: DocumentDefinition<Omit<OrderDocument, 'createdAt' | 'updatedAt'>>,
) {
  return Order.findByIdAndUpdate(id, order, { new: true });
}

export function deleteOrder(id: string) {
  return Order.findByIdAndRemove(id);
}
