import Joi from "joi";

class ValidationsAdmin {
    static postFeeForDate = Joi.object({
        dateStart: Joi.date().iso().required().messages({
          'date.base': 'La fecha de inicio debe ser una fecha válida.',
          'date.format': 'La fecha de inicio debe estar en el formato "YYYY-MM-DD".',
          'any.required': 'La fecha de inicio es un campo obligatorio, verifica el campo dateStart.'
        }),
        dateEnd: Joi.date().iso().required().messages({
          'date.base': 'La fecha de fin debe ser una fecha válida.',
          'date.format': 'La fecha de fin debe estar en el formato "YYYY-MM-DD".',
          'any.required': 'La fecha de fin es un campo obligatorio, verifica el campo dateEnd.'
        })
    });

    static postNewsFees = Joi.object({
        fees: Joi.array().items(
          Joi.object({
            idTradingAccount: Joi.string().length(8).pattern(/^\d+$/).required().messages({
              'string.base': 'El id de cuenta de trading debe ser un texto.',
              'string.length': 'El id de cuenta de trading debe tener exactamente 8 dígitos.',
              'string.pattern.base': 'El id de cuenta de trading debe contener solo números.',
              'any.required': 'El id de cuenta de trading es un campo obligatorio, verifica el campo idTradingAccount.'
            }),
            idSuscription: Joi.string().length(5).pattern(/^\d+$/).required().messages({
              'string.base': 'El id de suscripción debe ser un texto.',
              'string.length': 'El id de suscripción debe tener exactamente 5 dígitos.',
              'string.pattern.base': 'El id de suscripción debe contener solo números.',
              'any.required': 'El id de suscripción es un campo obligatorio, verifica el campo idSuscription.'
            }),
            fee: Joi.number().required().messages({
              'number.base': 'La tarifa debe ser un número.',
              'any.required': 'La tarifa es un campo obligatorio, verifica el campo fee.'
            }),
            equidad: Joi.number().required().messages({
              'number.base': 'La equidad debe ser un número.',
              'any.required': 'La equidad es un campo obligatorio, verifica el campo equidad.'
            }),
            date: Joi.date().iso().required().messages({
              'date.base': 'La fecha debe ser una fecha válida.',
              'date.format': 'La fecha debe estar en el formato "YYYY-MM-DD".',
              'any.required': 'La fecha es un campo obligatorio, verifica el campo date.'
            }),
            status: Joi.string().valid('pendiente').required().messages({
              'string.base': 'El estado debe ser un texto.',
              'any.only': 'El estado debe ser "pendiente".',
              'any.required': 'El estado es un campo obligatorio, verifica el campo status.'
            })
          }).required()
        ).min(1).required().messages({
          'array.base': 'El fee deben ser un array.',
          'array.includes': 'Cada tarifa debe ser un objeto válido.',
          'array.min': 'Debe haber al menos un objeto en el array de fees.',
          'any.required': 'El campo fees es obligatorio, verifica el campo fees.'
        })
    });

    static deleteFeeUser = Joi.object({
        idFee: Joi.string().required().messages({
            'string.base': 'El id de cuenta del fee debe ser un texto.',
            'any.required': 'El id del fee es un campo obligatorio, verifica el campo idFee.'
        }),
    });
  
    static validateAdmin(data,keyword) {
      switch (keyword) {
        case 'postFeeForDate':
          return ValidationsAdmin.postFeeForDate.validate(data, { abortEarly: false });
        case 'postNewsFees':
          return ValidationsAdmin.postNewsFees.validate(data, { abortEarly: false });
        case 'deleteFeeUser':
        return ValidationsAdmin.deleteFeeUser.validate(data, { abortEarly: false });
        default:
          return ValidationsAdmin.postFeeForDate.validate(data, { abortEarly: false });
      }
    }
}

export default ValidationsAdmin;