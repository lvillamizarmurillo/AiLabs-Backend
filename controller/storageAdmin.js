import Joi from "joi";

class ValidationsAdmin {
    static postSchemaCategory = Joi.object({
      name: Joi.string().required().regex(/^[A-Z\s]+$/).messages({
        'string': 'El nombre de la categoria debe contener un formato valido.',
        'string.pattern.base': 'El nombre de la categoria debe contener solo mayúsculas.',
        'any.required': 'El nombre de la categoria es un campo obligatorio, verifica el campo name.'
      })
    });
    static postSchemaProduct = Joi.object({
        name: Joi.string().required().regex(/^[A-Z\s]+$/).messages({
            'string': 'El nombre debe contener un formato valido.',
            'string.pattern.base': 'El nombre debe contener solo mayúsculas.',
            'any.required': 'El nombre es un campo obligatorio, verifica el campo name.'
        }),
        category: Joi.string().required().regex(/^[A-Z\s]+$/).messages({
          'string': 'El nombre de la categoria debe contener un formato valido.',
          'string.pattern.base': 'El nombre de la categoria debe contener solo mayúsculas.',
          'any.required': 'El nombre de la categoria es un campo obligatorio, verifica el campo category.'
        }),
        image: Joi.required().messages({
            'any.required': 'El nombre de la imagen es un campo obligatorio, verifica el campo image.'
          }),
        productPdf: Joi.required().messages({
            'any.required': 'El nombre del pdf es un campo obligatorio, verifica el campo productPdf.'
          }),
        info: Joi.string().required().messages({
            'string': 'La info debe contener un formato valido.',
            'any.required': 'La info es un campo obligatorio, verifica el campo info.'
        }),
        zone: Joi.string().required().regex(/^[A-Z][a-z]+$/).messages({
            'string': 'El nombre debe contener un formato válido.',
            'string.pattern.base': 'El nombre debe comenzar con mayúscula y seguir con minúsculas.',
            'any.required': 'El nombre es un campo obligatorio, verifica el campo zone.'
        })
      });
  
    static validateAdmin(data,keyword) {
      switch (keyword) {
        case 'nameCategory':
          return ValidationsAdmin.postSchemaCategory.validate(data, { abortEarly: false });
        case 'postProduct':
          return ValidationsAdmin.postSchemaProduct.validate(data, { abortEarly: false });
        default:
          return ValidationsAdmin.postSchemaCategory.validate(data, { abortEarly: false });
      }
    }
}

export default ValidationsAdmin;