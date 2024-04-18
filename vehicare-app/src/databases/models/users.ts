import { NewUser, User } from "@/databases/models/types";
import { z } from "zod";
import bcryptPass from "@/databases/helpers/bcrypt";
import { db } from '@/databases/config/monggoDB'

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
    .min(5),
  role: z
    .string({
      required_error: "Role cant be empty",
    })
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
}
