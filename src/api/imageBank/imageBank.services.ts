import ImageBank, { ImageBankDocument } from './imageBank.model';
import { DocumentDefinition } from 'mongoose';

export function getAllImageBanks() {
  return ImageBank.find({});
}

export function getImageBankById(id: string) {
  return ImageBank.findById(id);
}

export function createImageBank(
  input: DocumentDefinition<Omit<ImageBankDocument, 'createdAt' | 'updatedAt'>>,) {
  return ImageBank.create(input);
}

export function updateImageBank(id: String,
  imagebank: DocumentDefinition<Omit<ImageBankDocument, 'createdAt' | 'updatedAt'>>,) {
  return ImageBank.findByIdAndUpdate(id, imagebank, { new: true });
}

export function deleteImageBank(id: String) {
  const deleteImageBank = ImageBank.findByIdAndDelete(id);
  return deleteImageBank;
}
