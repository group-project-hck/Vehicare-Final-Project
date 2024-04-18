import { db } from '@/databases/config/monggoDB'
import { Sparepart } from './types'

class ModelSparepart {
    static dbSparepart() {
        return db.collection<Sparepart>("Spareparts")
    }

    static async allSparepart() {
        return await this.dbSparepart().find().toArray()
    }
}

export default ModelSparepart