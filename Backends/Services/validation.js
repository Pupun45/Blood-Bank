const JWT = require("jsonwebtoken");

const secret = '278891_b38$vr7t827';

function createTokens(user) {
    const payload = {
        _id : user._id,
        email : user.email,
        username : user.username
    };

    const token = JWT.sign(payload,secret);
    return token;
}

function validateUser(token) {
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports = {
    createTokens,
    validateUser,
}