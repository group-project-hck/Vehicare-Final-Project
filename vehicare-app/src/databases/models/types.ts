import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface Payload {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export interface Vehicle {
  insertedId: any;
  _id: ObjectId,
  name: string,
  type: string,
  image: string,
  UserId: ObjectId
}

export interface Sparepart {
  _id: ObjectId,
  name: string,
  type: string,
  price: number,
  image: string,
  description: string,
}

export interface ServiceBooks {
  _id: ObjectId,
  serviceName: string,
  servicePrice: number,
  SparepartId: ObjectId[],
  VehicleId: ObjectId,
  serviceDate: string
}

export interface Status {
  _id: ObjectId,
  HP: number,
  dailyHP: number,
  cointReward: number,
  VehicleId: ObjectId
}
export interface Notification {
  _id: ObjectId,
  UserId: ObjectId,
  message: string
}

// --------- ENTRY DATA TYPES ---------
export type NewUser = Omit<User, "_id">
export type NewVehicle = Omit<Vehicle, "_id">
export type NewStatus = Omit<Status, "_id">
export type NewBooks = Omit<ServiceBooks, "_id">
