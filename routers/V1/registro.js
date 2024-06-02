import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import User from "../../services/user.js";


const router = Router();
const version = routesVersioning();


router.post("/:token", version({
    '1.0.0': User.postUser
}));

export { router };