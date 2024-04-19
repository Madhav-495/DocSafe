const jwt = require('jsonwebtoken');
const secretkey = process.env.JWT_SECRET_KEY;

const generateToken = (UserObject) => {
    const token = jwt.sign({data :UserObject}, secretkey, { expiresIn: '24h' });
    return token;
};

const verifyToken = (token) => {
    const decoded = jwt.verify(token, secretkey);
    return decoded;
};
module.exports = {generateToken , verifyToken };