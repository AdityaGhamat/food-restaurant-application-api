const zod = require("zod");

const cartSchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  price: zod.number().int(),
  rating: zod.number().int(),
  image: zod.string(),
  quantity: zod.string(),
});

module.exports = { cartSchema };
