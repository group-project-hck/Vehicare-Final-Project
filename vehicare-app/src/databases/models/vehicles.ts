import { db } from '@/databases/config/monggoDB'
import { ObjectId } from 'mongodb'
import { NewVehicle, Vehicle } from './types'

export default class ModelVehicle {
    static dbVehicle() {
        return db.collection("Vehicles")
    }

    static async addVehicle(payload: NewVehicle): Promise<Vehicle> {
        return this.dbVehicle().insertOne({
            ...payload, UserId: new ObjectId(payload.UserId)
        }).then()
    }

    static async findVehicle(id: string) {
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
                    from: "Status",
                    localField: "_id",
                    foreignField: "VehicleId",
                    as: "Status",
                },
            },
            {
                $lookup:
                {
                    from: "Users",
                    localField: "UserId",
                    foreignField: "_id",
                    as: "User",
                },
            },
            {
                $lookup: {
                    from: 'ServiceBooks',
                    localField: '_id',
                    foreignField: 'VehicleId',
                    as: 'Books'
                }
            },
            {
                $lookup:
                {
                    from: "Spareparts",
                    localField: "Books.SparepartId",
                    foreignField: "_id",
                    as: "Spareparts",
                },
            }
        ]
        const cursor = await this.dbVehicle().aggregate(agg).toArray().then()
        return cursor[0] as Vehicle
    }
}