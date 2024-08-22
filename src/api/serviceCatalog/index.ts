import { Router } from 'express';
import {
  handleGetAllServiceCatalogs,
  handleGetServiceCatalogById,
  handleCreateServiceCatalog,
  handleUpdateServiceCatalog,
  handleDeleteServiceCatalog
} from './serviceCatalog.controller';
import { isAuthenticated, hasRole } from '../../auth/auth.services';

const router = Router();
router.get("/", handleGetAllServiceCatalogs);
router.get("/:id", handleGetServiceCatalogById);
router.post("/", isAuthenticated, hasRole(['ADMIN']), handleCreateServiceCatalog);
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateServiceCatalog);
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteServiceCatalog);

export default router;
