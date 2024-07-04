import ServiceCatalog, { ServiceCatalogDocument } from './serviceCatalog.model';
import { DocumentDefinition } from 'mongoose';

export function getAllServiceCatalogs() {
  return ServiceCatalog.find({})
}

export function getServiceCatalogById(id: string) {
  return ServiceCatalog.findById(id);
}

export function createServiceCatalog(
  input: DocumentDefinition<Omit<ServiceCatalogDocument, 'createdAt' | 'updatedAt'>>,) {
  return ServiceCatalog.create(input);
}

export function updateServiceCatalog(id: String,
  servicecatalog: DocumentDefinition<Omit<ServiceCatalogDocument, 'createdAt' | 'updatedAt'>>,) {
  return ServiceCatalog.findByIdAndUpdate(id, servicecatalog, { new: true });
}

export function deleteServiceCatalog(id: String) {
  const deleteServiceCatalog = ServiceCatalog.findByIdAndDelete(id);
  return deleteServiceCatalog;
}
