import Joi from "joi";

class ValidationsLogin {
    static registrationSchema = Joi.object({
      email: Joi.string().email().required().messages({
        'string.email': 'El email debe contener un formato valido.',
        'any.required': 'El email es un campo obligatorio.'
      }),
      password: Joi.string().required().messages({
        'string': 'La password debe contener un formato valido.',
        'any.required': 'La password es un campo obligatorio.'
      }),
    });
  
    static validateRegistration(data,keyword) {
      switch (keyword) {
        case 'loginAdmin':
          return ValidationsLogin.registrationSchema.validate(data, { abortEarly: false });
        default:
          return ValidationsLogin.registrationSchema.validate(data, { abortEarly: false });
      }
    }
}

export default ValidationsLogin;