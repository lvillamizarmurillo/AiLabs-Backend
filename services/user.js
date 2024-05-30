import { collectionGen } from "../config/mongoConnect.js"
import { verifyToken } from "./login.js";

const user = await collectionGen('user');

export default class User{
    static async getUser(req,res){

        let tokenUser = req.headers['authorization'].slice(7);

        let result = await verifyToken(req,tokenUser);

        res.status(200).send({status: 200, message: result})
    }

}