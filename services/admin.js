import { ObjectId } from "mongodb";
import { collectionGen } from "../config/mongoConnect.js";
import ValidationsAdmin from "../controller/storageAdmin.js";

const user = await collectionGen('user');
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

    static async postActualizationUsers(req,res) {
        if (!req.rateLimit) return;

        const dataFeesPending = await fee.find({ status: "pendiente" }).toArray();
        const datePago = new Date();

        const bulkUserOps = dataFeesPending.map(fee => ({
            updateOne: {
              filter: { idTradingAccount: fee.idTradingAccount, idSuscription: fee.idSuscription },
              update: { $inc: { totalFee: fee.fee } }
            }
        }));
        
        const bulkFeeOps = dataFeesPending.map(fee => ({
            updateOne: {
              filter: { _id: fee._id },
              update: { $set: { status: "pagado", datePago: datePago } }
            }
        }));

        await user.bulkWrite(bulkUserOps);
        await fee.bulkWrite(bulkFeeOps);

        res.status(200).json({status: 200, message: "Fees actualizados para cada usuario con éxito"});
    }

    static async postPayUsers(req,res) {
        if (!req.rateLimit) return;

        const dataUsers = await user.find({}).toArray();

        const bulkUserOps = dataUsers.map(update => ({
            updateOne: {
              filter: { _id: update._id },
              update: { $inc: { totalFee: 0 } }
            }
        }));

        await user.bulkWrite(bulkUserOps);

        res.status(200).json({status: 200, message: "Se actualizaron los pagos para cada usuario con éxito"});
    }

    static async postPayForReferUser(req, res) {
        if (!req.rateLimit) return;

        const dataUserFinalTeam = await user.aggregate([
            {
                $match: { rol: "user" } 
            }
        ]).toArray();

        const updateUserFeeAndReferidos = async (emailReferido, amount) => {
            let currentEmail = emailReferido;
            for (let level = 0; level < 5; level++) {
                if (currentEmail === "admin@gmail.com") {
                    await user.updateOne({ email: currentEmail }, { $inc: { totalReferidos: amount } });
                } else {
                    const userData = await user.findOne({ email: currentEmail });
                    if (!userData) break;
                    await user.updateOne({ email: currentEmail }, { $inc: { totalReferidos: amount } });
                    currentEmail = userData.emailReferido;
                }
            }
        };

        for (let user of dataUserFinalTeam) {
            const totalFeeUser = user.totalFee;
            const totalReferFiveLevels = totalFeeUser * 0.20;
            await updateUserFeeAndReferidos(user.emailReferido, totalReferFiveLevels);
        }

        const userData = await user.find({}).toArray();
        const bulkUserOps = userData.map(update => ({
            updateOne: {
                filter: { _id: update._id },
                update: { $set: { totalFee: 0 } }
            }
        }));
        await user.bulkWrite(bulkUserOps);

        res.status(200).json({ status: 200, message: "Datos de la red actualizados con éxito" });
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
