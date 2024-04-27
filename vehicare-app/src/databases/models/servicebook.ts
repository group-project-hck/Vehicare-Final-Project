import { db } from "@/databases/config/monggoDB";
import { NewBooks, ServiceBooks } from "./types";
import { ObjectId } from "mongodb";

class serviceBooksModel {
  static dbService() {
    return db.collection<ServiceBooks | NewBooks>("ServiceBooks");
  }

  static async detailServiceBook(id: string) {
    const agg = [
      {
        $match:
        {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup:
        {
          from: "Vehicles",
          localField: "VehicleId",
          foreignField: "_id",
          as: "Vehicle",
        },
      },
      {
        $lookup:
        {
          from: "Spareparts",
          localField: "SparepartId",
          foreignField: "_id",
          as: "Spareparts",
        },
      },
      {
        $lookup:
        {
          from: "Users",
          localField: "Vehicle.UserId",
          foreignField: "_id",
          as: "CustDetail",
        },
      },
    ]
    const cursor = this.dbService().aggregate(agg);
    const result = await cursor.toArray();
    return result[0] as ServiceBooks;
  }

  static async addServiceBooks(body: NewBooks) {
    body.serviceDate = new Date()
    return await this.dbService().insertOne(body) 
  }
}

export default serviceBooksModel;
