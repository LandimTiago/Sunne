import Joi from "joi";

export const querySchema = Joi.object({
  quantity: Joi.number().integer().min(1).max(20).required(),
});
