const CrudRepository = require("./crud-repository");
const { Restaurant } = require("../models");
class RestaurantRepository extends CrudRepository {
  constructor() {
    super(Restaurant);
  }
}

module.exports = RestaurantRepository;
