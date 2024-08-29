import Publication, { PublicationDocument } from './publication.model';
import { DocumentDefinition } from 'mongoose';

export function getAllPublications() {
  return Publication.find({}).sort({ createdAt: -1 });
}

export function getPublicationById(id: string) {
  return Publication.findById(id);
}

export function createPublication(
  input: DocumentDefinition<Omit<PublicationDocument, 'createdAt' | 'updatedAt'>>,) {
  return Publication.create(input);
}

export function updatePublication(id: String,
  publication: DocumentDefinition<Omit<PublicationDocument, 'createdAt' | 'updatedAt'>>,) {
  return Publication.findByIdAndUpdate(id, publication, { new: true });
}

export function deletePublication(id: String) {
  const deletePublication = Publication.findByIdAndDelete(id);
  return deletePublication;
}
