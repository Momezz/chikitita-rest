import { Request, Response, NextFunction } from 'express';

import { getUserFilter } from '../../api/user/user.services';
import { signToken } from '../auth.services';

/**
 * Returns a user and a JWT token signed by the app secret
 * @param req Request Request object
 * @param res Response Response object
 * @param next NextFunction Next function
 * @returns Promise<Response> Response object
 */
export async function handleLoginUser(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  console.log('Se ejecuta la funcion')
  try {
    const user = await getUserFilter({ email });
    console.log('user', user);
    console.log('try-> ', email)
    if (!user) {
      return res.status(404).json({ message: "Invalid email or password" });
    }
    const validPassword = await user.comparePassword(password)
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // Generate token JWT
    const payload = JSON.stringify(user);
    const token = signToken(payload);

    return res.status(200).json({ user, token });
  } catch (error: any) {
    return res.status(500).json(error.message)
  }
}
