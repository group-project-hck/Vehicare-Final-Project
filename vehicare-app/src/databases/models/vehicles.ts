import { db } from '@/databases/config/monggoDB'
import { ObjectId } from 'mongodb'

export type Vehicle = {
    _id: ObjectId,
    name: string,
    type: string,
    image: string,
    UserId: string
}

export type NewVehicle = Omit<Vehicle, "_id">

class ModelVehicle {
    static dbVehicle() {
        return db.collection("Vehicles")
    }

    static async addVehicle(payload: NewVehicle) {
        return this.dbVehicle().insertOne({
            ...payload, UserId: new ObjectId(payload.UserId)
        }) as NewVehicle
    }

    static async findVehicle(id: string) {
        return this.dbVehicle().findOne({ _id: new ObjectId(id) }) as Vehicle
    }

}

export default ModelVehicle