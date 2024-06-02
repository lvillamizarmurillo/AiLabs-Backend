import { collectionGen } from "../config/mongoConnect.js"
import { verifyToken, verifyTokenRegister } from "./login.js";
import dotenv from 'dotenv/config'
import ValidationsUser from "../controller/storageUser.js";

const user = await collectionGen('user');

export default class User{
    static async getUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        res.status(200).send({ status: 200, message: result });
    }

    static async getLinkReferir(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        res.status(200).send({ status: 200, message: tokenUser });
    }

    static async postUser(req,res){
        if (!req.rateLimit) return;

        let result = await verifyTokenRegister(req.params.token);

        if(!result) return res.status(400).json({ status: 400, message: 'Link no funcional, revisa que este bien copiado o no este expirado, en caso de estar expirado tienes que volver a solicitarlo a quien te lo envió.' });

        const dataPostUser = req.body;

        const { error } = ValidationsUser.validateUser(dataPostUser, 'postUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        const userComplete = {
            ...req.body,
            emailReferido: result.email,
            status: "inactivo",
            totalFee: 0,
            totalReferidos: 0,
            rol: "user",
            ultimoTeam: true
        }

        await user.insertOne(userComplete);

        if(result.ultimoTeam == true) {await user.updateOne({ email:result.email }, {$set: { ultimoTeam: false }})};

        res.status(200).json({ status: 200, message: 'Usuario registrado con éxito.' });
    }

    static async postFinallyDateUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPostUser = req.body

        const { error } = ValidationsUser.validateUser(dataPostUser, 'postFinallyUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await user.updateOne({ email:result.email }, {$set: { status: "activo", idTradingAccount:  dataPostUser.idTradingAccount, idSuscription: dataPostUser.idSuscription }});

        res.status(200).json({ status: 200, message: 'Usuario activo con éxito.' });
    }

    static async putPasswordUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPutPassword = req.body

        const { error } = ValidationsUser.validateUser(dataPutPassword, 'putPasswordUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await user.updateOne({ email:result.email }, {$set: { password: dataPutPassword.password}});

        res.status(200).json({ status: 200, message: 'Se actualizó la contraseña con éxito.' });
    }

    static async putidBinanceUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPutIdiBinance = req.body

        const { error } = ValidationsUser.validateUser(dataPutIdiBinance, 'putIdBinanceUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await user.updateOne({ email:result.email }, {$set: { idBinance: dataPutIdiBinance.idBinance}});

        res.status(200).json({ status: 200, message: 'Se actualizó el ID de Binance con éxito.' });
    }

    static async putDataUserFeeAccount(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPutFeeAccount = req.body

        const { error } = ValidationsUser.validateUser(dataPutFeeAccount, 'putDataUserFeeAccount');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await user.updateOne({ email:result.email }, {$set: { idTradingAccount: dataPutFeeAccount.idTradingAccount,idSuscription: dataPutFeeAccount.idSuscription }});

        res.status(200).json({ status: 200, message: 'Se actualizó el ID de la suscripcion y el ID de la cuenta de trading en Dooprime con éxito.' });
    }

    static async putPersonalInfoUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPutInfoUser = req.body

        const { error } = ValidationsUser.validateUser(dataPutInfoUser, 'putPersonalInfoUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await user.updateOne({ email:result.email }, {$set: { nombres: dataPutInfoUser.nombres, apellidos: dataPutInfoUser.apellidos, numero: dataPutInfoUser.numero }});

        res.status(200).json({ status: 200, message: 'Se actualizó la informacion personal con éxito.' });
    }

}