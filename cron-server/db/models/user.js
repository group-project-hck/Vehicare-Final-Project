const { ObjectId } = require("mongodb");
const database = require("../config/config");

class userModel {
  static userCollection() {
    return database.collection("Users");
  }
  static vehicleCollection() {
    return database.collection("Vehicles");
  }
  static async find(_id) {
    const vehicle = await this.vehicleCollection().findOne({
      _id,
    });
    if(!vehicle){
      return
    }
    const user = await this.userCollection().findOne({
      _id: vehicle.UserId,
    });
    return {vehicle, user}
  }
}

module.exports = userModel;
