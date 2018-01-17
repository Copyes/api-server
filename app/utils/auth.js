const config = require('config');
const jwt = require('jsonwebtoken');

// 验证api
const authToken = req => {
    if (req.header && req.header.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (Object.is(parts.length, 2) && Object.is(parts[0], 'Bearer')) {
            return parts[1];
        }

    }
    return false;
}


// 权限验证
const authIsVerified = req => {
    const token = authToken(req);
    if (token) {
        try {
            const decodedToken = jwt.verify(token, config.AUTH.jwtTokenSecret);
            if (decodedToken.exp > Math.floor(Date.now() / 1000)) {
                return true;
            }
        } catch (err) {}
    }
    return false;
};
module.exports = authIsVerified;
