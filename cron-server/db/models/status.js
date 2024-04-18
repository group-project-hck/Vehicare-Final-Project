const { ObjectId } = require("mongodb");
const database = require("../config/config");

class statusModel {
  static statusCollection() {
    return database.collection("Status");
  }
  static async findStatus () {
    const status = await this.statusCollection().find().toArray()
    return status
  }
  static async dailyHp (id){
    const status = await this.statusCollection().findOne({
      _id: new ObjectId(String(id))
    })
    if (status.dailyHp >= 25 ){
      status.dailyHp = status.dailyHp - 25
    }else{
      status.dailyHp = 0
    }
    const update = await this.statusCollection().updateOne({
      _id: new ObjectId(String(id))
    },{
      $set : {
        dailyHp : status.dailyHp
      }
    })
    return update
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
