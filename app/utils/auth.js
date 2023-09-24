// utils/auth.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: '1h' });

export const verifyToken = (token) => jwt.verify(token, SECRET_KEY);
