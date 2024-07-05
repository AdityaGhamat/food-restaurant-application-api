const { MenuItem } = require("../models");
const CrudRepository = require("./crud-repository");

class MenuItemRepository extends CrudRepository {
  constructor() {
    super(MenuItem);
  }
}
module.exports = MenuItemRepository;
