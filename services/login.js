import { collectionGen } from '../config/mongoConnect.js';
import { generateJWTToken } from '../middleware/jwt.js';
import ValidationsLogin from '../controller/storageLogin.js';
import dotenv from 'dotenv/config';
import { jwtVerify, SignJWT } from 'jose';

const userCollection = await collectionGen('user');

const createToken = async (req, res) => {
    if (!req.rateLimit) return;

    const dateAdminLogin = req.body;

    const { error } = ValidationsLogin.validateRegistration(dateAdminLogin,'loginAdmin');

    if (error) return res.status(400).send({status:400, message:error.details.map(err => err.message).join(' ')});

    const user = await userCollection.findOne({ email:dateAdminLogin.email, password:dateAdminLogin.password });

    if (!user) {
        return res.status(401).send({ status: 401, message: 'Usuario no encontrado' });
    }

    const jwtToken = await generateJWTToken(user.email, user.rol, user.ultimoTeam);

    res.status(200).send({ status: 200, message: jwtToken })
};

const verifyToken = async (req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_LOGIN)
        )
        const baseQuitada = req.baseUrl.slice(9)
        let result = await userCollection.findOne({
            email: jwtData.payload.email,
            rol: baseQuitada
        })
        return result
    } catch (error) {
        return false;
    }
};

const verifyTokenRegister = async (token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            token,
            encoder.encode(process.env.JWT_LOGIN)
        )
        let result = await userCollection.findOne({ email: jwtData.payload.email })
        return result
    } catch (error) {
        return false;
    }
};

export { createToken, verifyToken, verifyTokenRegister };