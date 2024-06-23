import { SignJWT } from 'jose';
import dotenv from 'dotenv/config';

const generateJWTToken = async (email, rol, ultimoTeam) => {
    const encoder = new TextEncoder();
    return new SignJWT({ email: email, rol: rol, ultimoTeam: ultimoTeam })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(process.env.JWT_LOGIN));
};

export { generateJWTToken };