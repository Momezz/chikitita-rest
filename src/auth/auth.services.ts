import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserDocument } from '../api/user/user.model';
import { AuthRequest, Roles } from './auth.types';
import { getUserFilter } from '../api/user/user.services';
/**
 * return a JWT signed by the app secret
 * @param payload object | String Data to be signed
 * @returns token Strng
 */

export function signToken(payload: any) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  const token = jwt.sign(payload, secret);
  return token;
}

export function verifyToken(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined");
  }
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return false;
  }
}

export async function isAuthenticated(req: AuthRequest, res: Response, next: NextFunction){
  const token = req.headers?.authorization?.split(' ')[1];
  if (!token){
    return res.status(401).json({ message: "invalid user token" });
  }
  const decoded = verifyToken(token) as UserDocument;
  if (!decoded){
    return res.status(401).json({ message: "token undecoded" });
  }
  const user = await getUserFilter({ email: decoded.email });
  if(!user){
    return res.status(401).json({ messge: 'Unauthorized' })
  }
  req.user = user;
  next();
  return true;
}

/**
 * Verifies if the user has the required role
 * @param allowRoles Roles
 * @returns
 */
export function hasRole(allowRoles: Roles) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    const { role } = req.user as UserDocument;
    if (!allowRoles.includes(role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
    return true;
  }
}
