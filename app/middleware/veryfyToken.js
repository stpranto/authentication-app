// middleware/verifyToken.js
import { verifyToken } from '../utils/auth';

export default function verifyTokenMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }

  try {
    verifyToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }
}
