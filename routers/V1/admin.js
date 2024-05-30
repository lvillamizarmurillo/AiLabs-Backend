import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Admin from "../../services/admin.js";
import passportHelper from '../../config/passportHelpert.js';


const router = Router();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get("/", version({
    '1.0.0': Admin.getAll
}));

export { router };