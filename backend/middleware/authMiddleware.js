const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from "Bearer token"

    if (!token) {
        return res.status(401).json({ message: 'Access Denied, No Token Provided', success: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to the request object
        next(); // Proceed to the next middleware/route
    } catch (err) {
        return res.status(403).json({ message: 'Invalid Token', success: false });
    }
};

module.exports = { authenticateToken };
