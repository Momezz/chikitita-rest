import { Router } from 'express';
import {
  handleGetAllOrders,
  handleGetOrderById,
  handleCreateOrder,
  handleUpdateOrder,
  handleDeleteOrder
} from './order.controller';

const router = Router();

router.get("/", handleGetAllOrders);
router.get("/:id", handleGetOrderById);
router.post("/", handleCreateOrder);
router.patch('/:id', handleUpdateOrder);
router.delete('/:id', handleDeleteOrder);

export default router;
