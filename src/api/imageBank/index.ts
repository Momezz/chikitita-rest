import { Router } from 'express';
import {
  handleGetAllImageBanks,
  handleGetImageBankById,
  handleCreateImageBank,
  handleUpdateImageBank,
  handleDeleteImageBank
} from './imageBank.controller';
import { isAuthenticated, hasRole } from '../../auth/auth.services';

const router = Router();
router.get("/", handleGetAllImageBanks);
router.get("/:id", handleGetImageBankById);
router.post("/", isAuthenticated, hasRole(['ADMIN']), handleCreateImageBank);
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateImageBank);
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteImageBank);

export default router;
