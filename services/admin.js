import { ObjectId } from "mongodb";
import { collectionGen } from "../config/mongoConnect.js";
import ValidationsAdmin from "../controller/storageAdmin.js";
import { resetWeeklyTradingAccountStats, updateTradingAccountFromPendingFees, updateUserReferralEarnings, markFeesAsPaid } from "../utils/adminHelpers.js"

const user = await collectionGen('users');
const tradingAccount = await collectionGen('tradingAccounts');
const fee = await collectionGen('fee');

export default class Admin {
    static async getAll(req,res) {
        if (!req.rateLimit) return;

        let result = await user.aggregate([
            {
                $match: {}
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async getAllFee(req,res) {
        if (!req.rateLimit) return;

        let result = await fee.aggregate([
            {
                $match: {}
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async getAllFeePendiente(req,res) {
        if (!req.rateLimit) return;

        let result = await fee.aggregate([
            {
                $match: {status: "pendiente"}
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async getAllFeePagado(req,res) {
        if (!req.rateLimit) return;

        let result = await fee.aggregate([
            {
                $match: {status: "pagado"}
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async postFeeForDateAll(req,res) {
        if (!req.rateLimit) return;

        const dataFeeForDate = req.body

        const { error } = ValidationsAdmin.validateAdmin(dataFeeForDate, 'postFeeForDate');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        let result = await fee.aggregate([
            {
                $match: { date: {$gte: new Date(dataFeeForDate.dateStart), $lte: new Date(dataFeeForDate.dateEnd)} }
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async postFeeForDatePendiente(req,res) {
        if (!req.rateLimit) return;

        const dataFeeForDate = req.body

        const { error } = ValidationsAdmin.validateAdmin(dataFeeForDate, 'postFeeForDate');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        let result = await fee.aggregate([
            {
                $match: {status: "pendiente", date: {$gte: new Date(dataFeeForDate.dateStart), $lte: new Date(dataFeeForDate.dateEnd)} }
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async postFeeForDatePagado(req,res) {
        if (!req.rateLimit) return;

        const dataFeeForDate = req.body

        const { error } = ValidationsAdmin.validateAdmin(dataFeeForDate, 'postFeeForDate');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        let result = await fee.aggregate([
            {
                $match: {status: "pagado", date: {$gte: new Date(dataFeeForDate.dateStart), $lte: new Date(dataFeeForDate.dateEnd)} }
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

    static async postNewsFees(req,res) {
        if (!req.rateLimit) return;

        const dataNewsFees = req.body

        const { error } = ValidationsAdmin.validateAdmin(dataNewsFees, 'postNewsFees');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await fee.insertMany(req.body.fees)

        res.status(200).json({status: 200, message: "Fees registrados con éxito"});
    }

    static async postActualizationUsers(req, res) {
        if (!req.rateLimit) return;
    
        try {
    
            await resetWeeklyTradingAccountStats();
    
            await updateTradingAccountFromPendingFees();
    
            await updateUserReferralEarnings();
    
            await markFeesAsPaid();
    
            res.status(200).json({ status: 200, message: "Datos de cada usuario actualizado con éxito" });
        } catch (error) {
            console.error("Error during weekly user data update:", error);
            res.status(500).json({ status: 500, message: error.message });
        }
    }


    static async deleteFeeUser(req,res) {
        if (!req.rateLimit) return;

        const dataDeleteFees = req.body

        const { error } = ValidationsAdmin.validateAdmin(dataDeleteFees, 'deleteFeeUser');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(' ') });

        await fee.deleteOne({_id: new ObjectId(dataDeleteFees.idFee)})

        res.status(200).json({status: 200, message: "Se eliminó el fee con éxito"});
    }

}
