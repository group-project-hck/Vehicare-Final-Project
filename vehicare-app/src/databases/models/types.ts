import { ObjectId } from "mongodb";

export interface User {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

export type NewUser = Omit<User, "_id">
export interface Payload {
  _id: string;
  username: string;
  email: string
}

export interface Vehicle {
  insertedId: any;
  _id: ObjectId,
  name: string,
  type: string,
  image: string,
  UserId: ObjectId
}

export type NewVehicle = Omit<Vehicle, "_id">

export interface Sparepart {
  _id: ObjectId,
  name: string,
  type: string,
  description: string,
  price: number
}

export interface Status {
  _id: ObjectId,
  HP: number,
  dailyHP: number,
  cointReward: number,
  VehicleId: ObjectId
}

export type NewStatus = Omit<Status, "_id">