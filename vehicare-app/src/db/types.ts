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
  email : string
}