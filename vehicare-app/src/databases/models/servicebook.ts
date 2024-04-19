import { db } from "@/databases/config/monggoDB";
import { ServiceBooks } from "./types";
import { ObjectId } from "mongodb";

class serviceBooksModel {
  static serviceBooksModel() {
    return db.collection<ServiceBooks>("ServiceBooks");
  }

  static async detailServiceBook(id: string) {
    const agg = [
        {
          $match: {
            _id: new ObjectId('6620cf1a918910ac27d8e7b2')
          }
        }, {
          $lookup: {
            from: 'Spareparts', 
            localField: 'SparepartId', 
            foreignField: '_id', 
            as: 'SparepartDetail'
          }
        }
      ];
    const cursor = this.serviceBooksModel().aggregate(agg);
    const result = await cursor.toArray();
    return result;
  }
  static async addServiceBooks(body: ServiceBooks) {
    body.serviceDate = new Date().toISOString();
    await this.serviceBooksModel().insertOne(body);
  }
}

export default serviceBooksModel;
