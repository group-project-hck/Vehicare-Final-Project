const { ObjectId } = require("mongodb");
const database = require("../config/config");

class statusModel {
  static statusCollection() {
    return database.collection("Status");
  }
  static async updateStatus(id, hp) {
    let emoji;
    if (hp < 100) {
      emoji = "Happy";
    } else if (hp < 75 && hp > 50) {
      emoji = "Smile";
    } else if (hp < 50 && hp > 25) {
      emoji = "Sad";
    } else if (hp < 25) {
      emoji = "Very Sad";
    }
    const status = await this.statusCollection().updateOne(
      { vehicleId: new ObjectId(String(id)) },
      {
        $set: {
          HP: hp,
          emoji,
        },
      }
    );
    return status;
  }
}

module.exports = statusModel;
