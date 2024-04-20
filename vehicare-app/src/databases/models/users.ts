import { NewUser, User } from "@/databases/models/types";
import { z } from "zod";
import bcryptPass from "@/databases/helpers/bcrypt";
import { db } from '@/databases/config/monggoDB'
import { Collection, ObjectId } from "mongodb";

export const UserValidation = z.object({
  username: z
    .string({
      required_error: "Username cant be empty",
    })
    .min(1, { message: "Username Required" }),
  name: z
    .string({
      required_error: "Name cant be empty",
    })
    .min(1, { message: "Name Required" }),
  email: z
    .string({
      required_error: "Email cant be empty",
    })
    .email(),
  password: z
    .string({
      required_error: "Password cant be empty",
    })
    .min(5, { message: "Password must contain at least 5 character(s)" })
});

export default class UserModel {
  static userCollection() {
    return db.collection("Users");
  }

  static async findUserByUsername(username: string) {
    const user = await this.userCollection().findOne({ username }) as User
    return user;
  }

  static async findUserByEmail(email: string) {
    const user = await this.userCollection().findOne({ email }) as User
    return user;
  }

  static async myProfile(id: string) {
    const agg = [
      {
        $match: {
          _id: new ObjectId('6620ce5bcd762073a71e18ac')
        }
      }, {
        $lookup: {
          from: 'Vehicles',
          localField: '_id',
          foreignField: 'UserId',
          as: 'Vehicles'
        }
      }, {
        $lookup: {
          from: 'ServiceBooks',
          localField: 'Vehicles._id',
          foreignField: 'VehicleId',
          as: 'Books'
        }
      }
    ]
    const cursor = this.userCollection().aggregate(agg);
    const result = await cursor.toArray();
    return result[0] as User
  }

  static async createUser(userData: NewUser): Promise<User> {
    try {
      const checkUsername = await this.findUserByUsername(userData.username);
      if (checkUsername) throw new Error("Username already exists");
      const checkEmail = await this.findUserByEmail(userData.email);
      if (checkEmail) throw new Error("Email already exists");
      userData.password = bcryptPass.hashPassword(userData.password);
      const result = await this.userCollection().insertOne(userData);
      return { ...userData, _id: result.insertedId };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  static async googleLogin(data: any) {
    const user = await this.userCollection().findOne({ email: data.email }) as User
    if (!user) {
      return await this.createUser(data)
    }
    return user
  }
}
