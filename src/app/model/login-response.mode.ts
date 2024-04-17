import { User } from "./user.model";

export class LoginResponse{
  code?: number;
  status?: string;
  message?: string;
  data?: DataItem
}

export class DataItem{
  accesToken?: string;
  user?: User;
}
