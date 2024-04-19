import { ObjectId } from "mongodb";
import { db } from "../config/monggoDB";
import { NewStatus, Status } from "./types";

export default class ModelStatus {
    static dbStatus() {
        return db.collection("Status")
    }

    static async addStatus(id: ObjectId): Promise<Status> {
        const defStatus: NewStatus = {
            HP: 100,
            dailyHP: 100,
            cointReward: 0,
            VehicleId: id
        }
        return this.dbStatus().insertOne(defStatus).then()
    }
}