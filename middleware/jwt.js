const jwt = require('jsonwebtoken');

// Secret key used to sign the JWT
const secretKey = process.env.jwt

function generateToken(payload) {
  const token = jwt.sign(payload, secretKey, { expiresIn: '24h' });
  return token;
}


function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    // Handle token expiration or invalid token error
    console.error("Invalid or expired token");
    return null;
  }
}


module.exports={verifyToken,generateToken}