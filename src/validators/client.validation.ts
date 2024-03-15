import Joi from "joi";

const quantity = Joi.object<{
  quantity: number;
}>({
  quantity: Joi.number().required(),
});

export const clientValidations = { quantity };
