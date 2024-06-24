import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import User from "../../services/user.js";
import passportHelper from '../../config/passportHelpert.js';


const router = Router();
const version = routesVersioning();

router.use(passportHelper.authenticate('bearer', {session: false}));

router.get("/", version({
    '1.0.0': User.getUser,
    '1.0.1': User.getLinkReferir,
    '1.0.2': User.getInfoHomeUser,
    '1.0.3': User.getWalletUser
}));

router.post("/", version({
    '1.0.0': User.postFinallyDateUser
}));

router.put("/", version({
    '1.0.0': User.putPasswordUser,
    '1.0.1': User.putidBinanceWalletUser,
    '1.0.2': User.putDataUserFeeAccount,
    '1.0.3': User.putPersonalInfoUser
}));


export { router };