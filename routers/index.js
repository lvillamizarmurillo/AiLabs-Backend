import os from 'os';
import { Router } from 'express';
import path from 'path';
import { readdirSync } from 'fs';

const router = Router();
let PATH_ROUTERS;
const systemOperating = os.platform();

const cleanName = (fileName) => {
    const file = fileName.split('.').shift();
    return file;
};

const getRouterPath = (version) => {
    const baseDir = (systemOperating === 'win32') ?
        path.dirname(new URL(import.meta.url).pathname.replace(/^\/(\w\:)/, '$1')) :
        path.dirname(new URL(import.meta.url).pathname);

    return path.join(baseDir, `V${version.split('.')[0]}`);
};

const loadModuleRouter = async (version, nameFile) => {
    const nameFileClean = cleanName(nameFile);
    if (nameFileClean !== 'index') {
        try {
            const moduleRouter = await import(`./V${version.split('.')[0]}/${nameFile}`);
            if (moduleRouter.router) {
                router.use(`/${nameFileClean}`, moduleRouter.router);
            }
        } catch (error) {
            console.error({ status: 400, message: `Error al cargar el módulo: ${error}` });
        }
    }
};

export default async (version) => {
    PATH_ROUTERS = getRouterPath(version);
    const files = readdirSync(PATH_ROUTERS);
    
    await Promise.all(files.map((nameFile) => loadModuleRouter(version, nameFile)));

    return router;
};
