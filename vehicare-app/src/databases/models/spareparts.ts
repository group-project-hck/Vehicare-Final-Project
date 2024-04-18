import { db } from '@/databases/config/monggoDB'
import { Sparepart } from './types'

export default class ModelSparepart {
    static dbSparepart() {
        return db.collection("Spareparts")
    }

    static async allSparepart() {
        return await this.dbSparepart().find().toArray() as Sparepart[]
    }
}