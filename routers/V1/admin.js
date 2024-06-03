import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import Admin from "../../services/admin.js";
import passportHelper from '../../config/passportHelpert.js';


const router = Router();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get("/", version({
    '1.0.0': Admin.getAll,
    '1.0.1': Admin.getAllFee,
    '1.0.2': Admin.getAllFeePendiente,
    '1.0.3': Admin.getAllFeePagado
}));

router.post("/", version({
    '1.0.0': Admin.postFeeForDateAll,
    '1.0.1': Admin.postFeeForDatePendiente,
    '1.0.2': Admin.postFeeForDatePagado,
    '1.0.3': Admin.postNewsFees,
    '1.0.4': Admin.postActualizationUsers,
    "1.0.5": Admin.postPayUsers,
    "1.0.6": Admin.postPayForReferUser
}));

router.delete("/", version({
    '1.0.0': Admin.deleteFeeUser
}));

export { router };