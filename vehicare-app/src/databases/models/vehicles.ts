import { db } from '@/databases/config/monggoDB'
import { ObjectId } from 'mongodb'
import { Vehicle } from './types'

export type NewVehicle = Omit<Vehicle, "_id">

class ModelVehicle {
    static dbVehicle() {
        return db.collection("Vehicles")
    }

    static async addVehicle(payload: NewVehicle): Promise<NewVehicle> {
        return this.dbVehicle().insertOne({
            ...payload, UserId: new ObjectId(payload.UserId)
        }).then()
    }

    static async findVehicle(id: string): Promise<Vehicle> {
        return this.dbVehicle().findOne({ _id: new ObjectId(id) }).then()
    }

}

export default ModelVehicle