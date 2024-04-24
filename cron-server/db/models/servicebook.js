const database = require("../config/config");

class serviceBookModel {
  static serviceBookCollection() {
    return database.collection("ServiceBooks");
  }
  static async findAll() {
    const serviceBook = await this.serviceBookCollection().find().toArray()
    return serviceBook;
  }
}

module.exports = serviceBookModel