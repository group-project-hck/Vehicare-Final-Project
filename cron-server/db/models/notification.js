const database = require("../config/config");

class notificationModel {
  static notificationCollection() {
    return database.collection("Notifications");
  }
  static async createNotification(userId, message) {
    const notif = await this.notificationCollection().insertOne({ 
      userId,
      message
     });
    return notif;
  }
}

module.exports = notificationModel