const { ObjectId } = require("mongodb");
const database = require("../config/config");

class notificationModel {
  static notificationCollection() {
    return database.collection("Notifications");
  }
  static async createNotification(userId, message) {
    const notif = await this.notificationCollection().insertOne({ 
      userId : new ObjectId(String(userId)),
      message
     });
    return notif;
  }
}

module.exports = notificationModel