import bcrypt from "bcryptjs"

export function hashPassword(password: string) {
    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    return hash
}

export function comparePassword(password: string, passwordHash: string) {
    return bcrypt.compareSync(password, passwordHash);
}

exports = {
    hashPassword,
    comparePassword,
}