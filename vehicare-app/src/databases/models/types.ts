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
  _id: ObjectId,
  name: string,
  type: string,
  image: string,
  UserId: string
}

export interface Sparepart {
  _id: ObjectId,
  name: string,
  type: string,
  price: number
}
export interface ServiceBooks {
  _id: ObjectId,
  serviceName: string,
  servicePrice: number,
  SparepartId: ObjectId,
  VehicleId: ObjectId,
  serviceDate: string
}