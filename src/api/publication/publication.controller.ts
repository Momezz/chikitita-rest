import { Request, Response, NextFunction } from 'express';
import {
  getAllPublications,
  getPublicationById,
  createPublication,
  updatePublication,
  deletePublication,
} from './publication.services';

export async function handleGetAllPublications(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const publications = await getAllPublications();
    return res.status(200).json(publications);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetPublicationById(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const { id } = req.params;
    const publication = await getPublicationById(id);
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" })
    }
    return res.status(200).json(publication);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreatePublication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newPublication = await createPublication(data);
    return res.status(201).json(newPublication);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdatePublication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;
  try {
    const publication = await updatePublication(id, data);
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    return res.status(200).json(publication);
  } catch (error) {
    return res.status(500).json(error);
  }

}

handleDeletePublication
export async function handleDeletePublication(
  req: Request,
  res: Response,
  next: NextFunction) {
  const { id } = req.params;
  try {
    const publication = await deletePublication(id);
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    return res.status(201).json(publication);
  } catch (error) {
    return res.status(500).json(error);
  }
}
