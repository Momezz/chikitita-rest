import { Router } from 'express';
import {
  handleAllGetBookings,
  handleCreateBooking,
  handleDeleteBooking,
  handleGetBooking,
  handleUpdateBooking
} from './booking.controller';

const router = Router();

router.get('/', handleAllGetBookings);
router.get('/:id', handleGetBooking);
router.post('/', handleCreateBooking);
router.patch('/:id', handleUpdateBooking);
router.delete('/:id', handleDeleteBooking);

export default router;
