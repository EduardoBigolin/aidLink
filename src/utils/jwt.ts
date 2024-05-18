import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

export const sign = (payload: any) => {
  return jwt.sign(payload, secret);
};

export const verify = (token: string) => {
  return jwt.verify(token, secret);
};

export const decode = (token: string) => {
  return jwt.decode(token);
};

export default { sign, verify, decode };