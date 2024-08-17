import { Request, Response, NextFunction } from 'express';
import {
  getAllImageBanks,
  getImageBankById,
  createImageBank,
  updateImageBank,
  deleteImageBank,
} from './imageBank.services';

export async function handleGetAllImageBanks(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const imagebanks = await getAllImageBanks();
    return res.status(200).json(imagebanks);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetImageBankById(
  req: Request,
  res: Response,
  next: NextFunction) {
  try {
    const { id } = req.params;
    const imagebank = await getImageBankById(id);
    if (!imagebank) {
      return res.status(404).json({ message: "ImageBank not found" })
    }
    return res.status(200).json(imagebank);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleCreateImageBank(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newImageBank = await createImageBank(data);
    return res.status(201).json(newImageBank);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateImageBank(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;
  try {
    const imagebank = await updateImageBank(id, data);
    if (!imagebank) {
      return res.status(404).json({ message: "ImageBank not found" });
    }
    return res.status(200).json(imagebank);
  } catch (error) {
    return res.status(500).json(error);
  }
}

handleDeleteImageBank
export async function handleDeleteImageBank(
  req: Request,
  res: Response,
  next: NextFunction) {
  const { id } = req.params;
  try {
    const imagebank = await deleteImageBank(id);
    if (!imagebank) {
      return res.status(404).json({ message: "ImageBank not found" });
    }
    return res.status(201).json(imagebank);
  } catch (error) {
    return res.status(500).json(error);
  }
}
