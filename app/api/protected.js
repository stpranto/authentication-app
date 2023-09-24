// pages/api/protected.js
import verifyTokenMiddleware from '../../middleware/verifyToken';

export default function protectedRoute(req, res) {
  res.status(200).json({ message: 'This is a protected route.' });
}

// pages/api/protected.js
import verifyTokenMiddleware from '../../middleware/verifyToken';

export default function protectedRoute(req, res) {
  res.status(200).json({ message: 'This is a protected route.' });
}

// pages/api/unprotected.js
export default function unprotectedRoute(req, res) {
  res.status(200).json({ message: 'This is an unprotected route.' });
}
