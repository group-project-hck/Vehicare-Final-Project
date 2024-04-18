const { ObjectId } = require("mongodb");
const database = require("../config/config");

class userModel {
  static userCollection() {
    return database.collection("Users");
  }
  static vehicleCollection() {
    return database.collection("Vehicles");
  }
  static async find(id) {
    const vehicle = await this.vehicleCollection().findOne({ 
        _id : new ObjectId(String(id))
     });
     const user = await this.userCollection().findOne({
        _id: vehicle.userId
     })
    return user;
  }
}

module.exports = userModel