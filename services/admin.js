import { collectionGen } from "../config/mongoConnect.js";
import ValidationsAdmin from "../controller/storageAdmin.js";

const user = await collectionGen('user');

export default class Admin {
    static async postCategory(req, res) {
        if (!req.rateLimit) return;

        const dateCategoryName = req.body;

        const { error } = ValidationsAdmin.validateAdmin(dateCategoryName, 'nameCategory');

        if (error) return res.status(400).send({ status: 400, message: error.details.map(err => err.message).join(', ') });

        await user.insertOne(req.body);

        res.status(200).json({ status: 200, message: 'Categoria registrada con éxito.' });
    }

    static async getAll(req,res) {
        if (!req.rateLimit) return;

        let result = await user.aggregate([
            {
                $match: {}
            }
        ]).toArray();

        res.status(200).json({status: 200, message: result});
    }

}
