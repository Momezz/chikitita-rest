import { Request, Response, NextFunction } from 'express';
import {
  getAllServiceCatalogs,
  getServiceCatalogById,
  createServiceCatalog,
  updateServiceCatalog,
  deleteServiceCatalog,
} from './serviceCatalog.services';

export async function handleGetAllServiceCatalogs(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const servicecatalogs = await getAllServiceCatalogs();
    return res.status(200).json(servicecatalogs);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetServiceCatalogById(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const { id } = req.params;
    const servicecatalog = await getServiceCatalogById(id);
    if (!servicecatalog) {
      return res.status(404).json({ message: "ServiceCatalog not found" })
    }
    return res.status(200).json(servicecatalog);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateServiceCatalog(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newServiceCatalog = await createServiceCatalog(data);
    return res.status(201).json(newServiceCatalog);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateServiceCatalog(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;
  try {
    const servicecatalog = await updateServiceCatalog(id, data);
    if (!servicecatalog) {
      return res.status(404).json({ message: "ServiceCatalog not found" });
    }
    return res.status(200).json(servicecatalog);
  } catch (error) {
    return res.status(500).json(error);
  }
}

handleDeleteServiceCatalog
export async function handleDeleteServiceCatalog(
  req: Request,
  res: Response,
  next: NextFunction) {
  const { id } = req.params;
  try {
    const servicecatalog = await deleteServiceCatalog(id);
    if (!servicecatalog) {
      return res.status(404).json({ message: "ServiceCatalog not found" });
    }
    return res.status(201).json(servicecatalog);
  } catch (error) {
    return res.status(500).json(error);
  }
}
