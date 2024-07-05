const zod = require("zod");

const userRegisterValidationSchema = zod.object({
  name: zod.string().min(3),
  email: zod.string().email().min(5),
  password: zod.string().min(6),
});

const userSignInValidationSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});
const addressValidation = zod.string().min(6);
const phoneNumberValidation = zod.number().int().max(10);
module.exports = {
  userRegisterValidationSchema,
  userSignInValidationSchema,
  addressValidation,
  phoneNumberValidation,
};
