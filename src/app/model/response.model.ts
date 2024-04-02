import { Interview } from "./interview.model";
import { Question } from "./question.model";
import { User } from "./user.model";

export class Response{
  responseID?: number;
  responseText?: string;
  score?: number;
  user?: User;
  question?: Question;
  interview?: Interview;
}
