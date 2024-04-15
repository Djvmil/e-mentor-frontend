import { User } from "./user.model";

export class LoginResponse{
  accesToken?: string;
  user?: User;
}
