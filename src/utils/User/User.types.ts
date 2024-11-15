export interface IUserRegistration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUserAuthorization {
  email: string;
  password: string;
}

export interface IUser {
  username: string;
  email: string;
}
