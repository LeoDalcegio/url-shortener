export interface User {
  name?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
}