import { collectionGen } from "../config/mongoConnect.js"
import { verifyToken, verifyTokenRegister } from "./login.js";
import dotenv from 'dotenv/config'
import ValidationsUser from "../controller/storageUser.js";

const user = await collectionGen('users');
const wallet = await collectionGen('wallets');
const tradingAccount = await collectionGen('tradingAccounts');

export default class User{
    static async getUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        res.status(200).send({ status: 200, message: result });
    }

    static async getInfoHomeUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        let data = await tradingAccount.findOne({ email: result.email })

        res.status(200).send({ status: 200, message: data });
    }

    static async getWalletUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        let data = await wallet.findOne({ email: result.email })

        res.status(200).send({ status: 200, message: data });
    }

    static async getLinkReferir(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        res.status(200).send({ status: 200, message: tokenUser });
    }

    static async postUser(req,res){
        if (!req.rateLimit) return;

        const dataPostUser = req.body;

        const { error } = ValidationsUser.validateUser(dataPostUser, 'postUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        let result = await verifyTokenRegister(req.params.token);

        if(!result) return res.status(400).json({ status: 400, message: 'Link no funcional, revisa que este bien copiado o no este expirado, en caso de estar expirado tienes que volver a solicitarlo a quien te lo envió.' });

        const userComplete = {
            username: req.body.username,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            email: req.body.email,
            password: req.body.password,
            numero: req.body.numero,
            emailReferido: result.email,
            status: "inactivo",
            rol: "user"
        }

        const walletComplete = {
            email: req.body.email,
            idBinance: req.body.idBinance,
            walletUSDTBEP20: req.body.walletUSDTBEP20
        }

        const tradingAccountComplete = {
            email: req.body.email,
            capitalOperativo: 0,
            rentabilidadSemanal: 0,
            rentabilidadAcumulada: 0,
            carteraDirecta: 0,
            carteraEquipo: 0,
            acumuladoCartera: 0,
            gananciaSemanal: 0,
            gananciaTotal: 0,
            totalEquipo: 0
        }

        await user.insertOne(userComplete);
        await wallet.insertOne(walletComplete);
        await tradingAccount.insertOne(tradingAccountComplete);
        await tradingAccount.updateOne({email:result.email}, {$inc: {totalEquipo: 1}});

        res.status(200).json({ status: 200, message: 'Usuario registrado con éxito.' });
    }

    static async postFinallyDateUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPostUser = req.body

        const { error } = ValidationsUser.validateUser(dataPostUser, 'postFinallyUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await tradingAccount.updateOne({ email:result.email }, {$set: { status: "activo", idTradingAccount:  dataPostUser.idTradingAccount, idSuscription: dataPostUser.idSuscription }});

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

    static async putidBinanceWalletUser(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPutIdiBinance = req.body

        const { error } = ValidationsUser.validateUser(dataPutIdiBinance, 'putIdBinanceUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await wallet.updateOne({ email:result.email }, {$set: { idBinance: dataPutIdiBinance.idBinance, walletUSDTBEP20: dataPutIdiBinance.walletUSDTBEP20}});

        res.status(200).json({ status: 200, message: 'Se actualizó el ID de Binance con éxito.' });
    }

    static async putDataUserFeeAccount(req,res){
        if (!req.rateLimit) return;

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        const dataPutFeeAccount = req.body

        const { error } = ValidationsUser.validateUser(dataPutFeeAccount, 'putDataUserFeeAccount');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await tradingAccount.updateOne({ email:result.email }, {$set: { idTradingAccount: dataPutFeeAccount.idTradingAccount,idSuscription: dataPutFeeAccount.idSuscription }});

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