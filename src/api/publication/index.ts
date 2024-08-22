import { Router } from 'express';
import {
  handleGetAllPublications,
  handleGetPublicationById,
  handleCreatePublication,
  handleUpdatePublication,
  handleDeletePublication
} from './publication.controller';
import { isAuthenticated, hasRole } from '../../auth/auth.services';

const router = Router();
router.get("/", handleGetAllPublications);
router.get("/:id", handleGetPublicationById);
router.post("/", isAuthenticated, hasRole(['ADMIN']), handleCreatePublication);
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdatePublication);
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeletePublication);

export default router;
