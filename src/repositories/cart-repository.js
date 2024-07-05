const CrudRepository = require("./crud-repository");
const { Cart } = require("../models");

class CartRepository extends CrudRepository {
  constructor() {
    super(Cart);
  }
}

module.exports = CartRepository;
