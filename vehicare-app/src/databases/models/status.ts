import { ObjectId } from "mongodb";
import { db } from "../config/monggoDB";
import { NewStatus, Status } from "./types";
import { NextResponse } from "next/server";

export default class ModelStatus {
  static dbStatus() {
    return db.collection("Status");
  }

  static async addDailyHP(id: string) {
    const status = await this.dbStatus().findOne({
      VehicleId: new ObjectId(id),
    });

    if (status && status.dailyHP <= 98) {
      status.dailyHP = status.dailyHP + 2;
    } else if (status && status.dailyHP > 98) {
      status.dailyHP = 100;
    }
    const update = await this.dbStatus().updateOne(
      {
        _id: new ObjectId(status?._id),
      },
      {
        $set: {
          dailyHP: status?.dailyHP,
        },
      }
    );
    return update;
  }
  static async addStatus(id: ObjectId): Promise<Status> {
    const defStatus: NewStatus = {
      HP: 100,
      dailyHP: 100,
      cointReward: 0,
      VehicleId: id,
      gatcha: true,
      updatedAt : new Date(),
    };
    return this.dbStatus().insertOne(defStatus).then();
  }
  static async resetStatus(id: ObjectId) {
    const reset = await this.dbStatus().updateOne(
      {
        VehicleId: new ObjectId(id),
      },
      {
        $set: {
          HP: 100,
          dailyHP: 100,
          gatcha: true,
          updatedAt : new Date()
        },
      }
    );
    return reset;
  }
  static async ChangeGatcha(id: string, coin: number) {
    const check = await this.dbStatus().findOne({
      VehicleId: new ObjectId(id),
    });
    if (check?.gatcha == false) {
      throw new Error("Gatcha is already used");
    }
    const result = await this.dbStatus().updateOne(
      {
        VehicleId: new ObjectId(id),
      },
      {
        $set: {
          gatcha: false,
          cointReward : coin
        },
      }
    );
    return result;
  }
}
