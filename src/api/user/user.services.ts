import { DocumentDefinition, FilterQuery } from 'mongoose';
import User, { UserDocument } from './user.model';

export function getAllUsers() {
  return User.find({}, { password: 0 });
}

export function getUserById(id: string) {
  const user = User.findById(id).populate("bookings");
  return user;
}

export function createUser(user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.create(user);
}

export function updateUser(id: string, user: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt'>>) {
  return User.findByIdAndUpdate(id, user, { new: true });
}

export function getUserFilter(filter: FilterQuery<UserDocument>) {
  const user = User.findOne(filter);
  return user;
}

export function deleteUser(id: string) {
  return User.findByIdAndDelete(id);
}
