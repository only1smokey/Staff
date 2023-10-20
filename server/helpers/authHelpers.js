const bcrypt = require('bcryptjs');

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function checkPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = { hashPassword, checkPassword };
