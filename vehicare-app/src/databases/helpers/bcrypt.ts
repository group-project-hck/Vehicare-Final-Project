import bcrypt from "bcryptjs"

export default class bcryptPass {
  static hashPassword(password: string) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }
  static comparePassword(password: string, basePassword: string) {
    return bcrypt.compareSync(password, basePassword);
  }
}
