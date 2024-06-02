import Joi from "joi";

class ValidationsUser {
    static postSchemaUserFinally = Joi.object({
      idTradingAccount: Joi.string().length(8).pattern(/^\d+$/).required().messages({
        'string.length': 'El ID de Trading Account debe tener exactamente 8 dígitos.',
        'string.pattern.base': 'El ID de Trading Account debe contener solo dígitos.',
        'any.required': 'El ID de Trading Account es un campo obligatorio, verifica el campo idTradingAccount.'
      }),
      idSuscription: Joi.string().length(5).pattern(/^\d+$/).required().messages({
        'string.length': 'El ID de Suscription debe tener exactamente 5 dígitos.',
        'string.pattern.base': 'El ID de Suscription debe contener solo dígitos.',
        'any.required': 'El ID de Suscription es un campo obligatorio, verifica el campo idSuscription.'
      })
    });

    static postSchemaUser = Joi.object({
      username: Joi.string().max(12).required().messages({
        'string.base': 'El nombre de usuario debe ser un texto.',
        'string.max': 'El nombre de usuario no puede tener más de 12 caracteres.',
        'any.required': 'El nombre de usuario es un campo obligatorio, verifica el campo username.'
      }),
      nombres: Joi.string().max(20).required().messages({
        'string.base': 'El nombre debe ser un texto.',
        'string.max': 'El nombre no puede tener más de 20 caracteres.',
        'any.required': 'El nombre es un campo obligatorio, verifica el campo nombres.'
      }),
      apellidos: Joi.string().max(20).required().messages({
        'string.base': 'El apellido debe ser un texto.',
        'string.max': 'El apellido no puede tener más de 20 caracteres.',
        'any.required': 'El apellido es un campo obligatorio, verifica el campo apellidos.'
      }),
      email: Joi.string().email().required().messages({
        'string.email': 'El correo debe tener un formato válido.',
        'any.required': 'El correo es un campo obligatorio, verifica el campo email.'
      }),
      password: Joi.string().required().messages({
        'string.base': 'La contraseña debe ser un texto.',
        'any.required': 'La contraseña es un campo obligatorio, verifica el campo password.'
      }),
      numero: Joi.string().pattern(/^\d+$/).required().messages({
        'string.pattern.base': 'El número debe contener solo dígitos.',
        'any.required': 'El número es un campo obligatorio, verifica el campo numero.'
      }),
      idBinance: Joi.string().length(9).pattern(/^\d+$/).required().messages({
        'string.length': 'El ID de Binance debe tener exactamente 9 dígitos.',
        'string.pattern.base': 'El ID de Binance debe contener solo dígitos.',
        'any.required': 'El ID de Binance es un campo obligatorio, verifica el campo idBinance.'
      })
    });
  
    static validateUser(data,keyword) {
      switch (keyword) {
        case 'postFinallyUser':
          return ValidationsUser.postSchemaUserFinally.validate(data, { abortEarly: false });
        case 'postUser':
          return ValidationsUser.postSchemaUser.validate(data, { abortEarly: false });
        default:
          return ValidationsUser.postSchemaUserFinally.validate(data, { abortEarly: false });
      }
    }
}

export default ValidationsUser;