import { sign } from 'jsonwebtoken';

const JWT_SECRET = "secret"

const generateToke = (payload: unknown) => {
  const token = sign({ payload }, JWT_SECRET as string, { expiresIn: '1d' });
  return token;
};

export default generateToke;