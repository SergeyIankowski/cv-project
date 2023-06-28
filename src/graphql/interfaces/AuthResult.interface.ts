import {User} from "./User.interface";

export interface AuthResult {
  user: User;
  access_token: string;
}
