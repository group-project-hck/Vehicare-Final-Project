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
  static async dailyHP (status){
    if (status.dailyHP >= 25 ){
      status.dailyHP = status.dailyHP - 25
    }else{
      status.dailyHP = 0
    }
    const update = await this.statusCollection().updateOne({
      _id: new ObjectId(String(status._id))
    },{
      $set : {
        dailyHP : status.dailyHP
      }
    })
    return update
  }
  static async updateStatus(id, HP) {
    const status = await this.statusCollection().updateOne(
      { VehicleId: id },
      {
        $set: {
          HP: HP,
        },
      }
    );
    return status;
  }
}

module.exports = statusModel;
