import rateLimit from "express-rate-limit";

export default class LimitPetitions {
  static limitLoginAdmin() {
    return rateLimit({
      windowMs: 30 * 60 * 1000, // 30 minutos
      max: 10,
      message: {status: 500, message: 'Limite de peticiones para el acceso de admin alcanzado, espere 30 minutos'},
      standardHeaders: true,
      legacyHeaders: false,
    });
  }

  static limitAllPetitions() {
    return rateLimit({
      windowMs: 1 * 60 * 1000, // 1 minuto
      max: 50,
      message: {status: 500, message: 'Limite de peticiones alcanzada, espere 1 minutos'},
      standardHeaders: true,
      legacyHeaders: false,
    });
  }
}