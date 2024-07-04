import { Request, Response, NextFunction } from 'express';
import {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from './order.services';

export async function handleGetAllOrders(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetOrderById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const order = await getOrderById(id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  return res.status(200).json(order);
}

export async function handleCreateOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newOrder = await createOrder(data);
    return res.status(201).json(newOrder);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;
  const order = await updateOrder(id, data);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  return res.status(200).json(order);
}

export async function handleDeleteOrder(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const order = await deleteOrder(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    return res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}
