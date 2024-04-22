import { db } from '@/databases/config/monggoDB'
import { Sparepart } from './types'
import { ObjectId } from 'mongodb'

export default class ModelSparepart {
    static dbSparepart() {
        return db.collection("Spareparts")
    }

    static async allSparepart() {
        return await this.dbSparepart().find().toArray() as Sparepart[]
    }
    static async getSparepart(id: string) {
        return await this.dbSparepart().findOne({ _id: new ObjectId(id) }) as Sparepart
    }
}