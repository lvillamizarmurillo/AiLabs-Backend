import { collectionGen } from "../config/mongoConnect.js";

const user = await collectionGen('user');

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

}
