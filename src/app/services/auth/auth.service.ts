import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [{"email":"admin@em.com","password":"123","roles":['ADMIN']},
  {"email":"nadhem@em.com","password":"123","roles":['USER']} ];
  public loggedUser!:string;

  constructor() { }
}
