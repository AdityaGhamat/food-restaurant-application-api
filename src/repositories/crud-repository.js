const { Logger } = require("../config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-respository:create");
      throw error;
    }
  }
  async deleteOnlyOne(data) {
    try {
      const response = await this.model.deleteOne(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-respository:deleteOnlyOne");
      throw error;
    }
  }

  async deleteMany(id) {
    try {
      const response = await this.model.deleteMany(id);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-respository:deleteMany");
      throw error;
    }
  }

  async deleteById(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-repository:deleteById");
    }
  }

  async findById(data) {
    try {
      const response = await this.model.findById(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-respository:findById");
      throw error;
    }
  }

  async findByIdAndPopulate(id, modelField) {
    try {
      const response = await this.model
        .findById(id)
        .populate(modelField)
        .exec();
      return response;
    } catch (error) {
      Logger.error(
        "Something went wrong in crud-repository:findByIdAndPopulate"
      );
      throw error;
    }
  }

  async findAll(data) {
    try {
      const response = await this.model.find(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-repository:findAll");
      throw error;
    }
  }

  async findOne(data) {
    try {
      const response = await this.model.findOne(data);
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-repository:findOne");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      Logger.error("Something went wrong in crud-respository:update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
