import { Router } from "express";
import routesVersioning from "express-routes-versioning";
import { createToken } from "../../services/login.js";

const router = Router();
const version = routesVersioning();

router.post("/", version({
    '1.0.0': createToken
}))

export { router };