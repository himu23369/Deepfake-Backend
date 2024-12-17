const { JWT_SECRET } = require('./config');
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(411).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decode = jwt.verify(token, JWT_SECRET);
        if (decode) {
            req.userId = decode.userId;
            next();
        } else {
            res.status(401).json({});
        }
    } catch (err) {
        return res.status(403).json({});
    }
}
module.exports = {
    authMiddleware
}