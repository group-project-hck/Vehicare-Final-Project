import { db } from '@/databases/config/monggoDB'
import { Notification, Sparepart } from './types'
import { ObjectId } from 'mongodb'

export default class ModelNotification {
    static dbNotification() {
        return db.collection("Notifications")
    }
    static async getNotification(id: string) {
        return await this.dbNotification().find({ UserId: new ObjectId(id) }).toArray() as Notification[]
    }
}