import jwt from "jsonwebtoken";
import { Payload } from "../models/types";
import * as jose from "jose";

const secret = process.env.JWT_SECRET as string;
export class Tokenjwt {
  static genToken(payload: Payload) {
    return jwt.sign(payload, secret);
  }
  static verify(token: string) {
    return jwt.verify(token, secret);
  }
}

export const readPayloadJose = async <T>(token: string) => {
  const secret = process.env.JWT_SECRET as string;
  const secretKey = new TextEncoder().encode(secret);
  const result = await jose.jwtVerify<T>(token, secretKey);
  return result.payload;
};
