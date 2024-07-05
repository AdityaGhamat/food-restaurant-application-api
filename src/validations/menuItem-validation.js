const zod = require("zod");

const menuItemValidationSchema = zod.object({
  itemName: zod.string().min(5),
  description: zod.string().min(20),
  category: zod.string(),
  price: zod.number().int(),
  quantity: zod.number().int(),
  imageUrl: zod.string(),
  ingredients: zod.array(zod.string()),
  dietryInfo: zod.string(),
  ratings: zod.number().multipleOf(0.01),
});

const reviewValidation = zod.string().min(15);

module.exports = { menuItemValidationSchema, reviewValidation };
