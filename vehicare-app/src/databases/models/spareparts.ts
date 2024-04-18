import { db } from '@/databases/config/monggoDB'
import { ObjectId } from 'mongodb'

export type Sparepart = {
    _id: ObjectId,
    name: string,
    type: string,
    price: number
}

class ModelSparepart {
    static dbSparepart() {
        return db.collection("Spareparts")
    }

    static async allSparepart() {
        return await this.dbSparepart().find().toArray() as Sparepart[]
    }
}

export default ModelSparepart