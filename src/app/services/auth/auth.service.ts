import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [
    {"email":"admin@em.com","password":"123","roles":['ADMIN']},
    {"email":"nadhem@em.com","password":"123","roles":['USER']}
  ];

  public loggedUser?: string;
  public isloggedIn: Boolean = false;
  public roles?: string[];
  constructor(private router: Router) { }

  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  signIn(user :User):Boolean{
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if(user.email == curUser.email && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.email;
        this.isloggedIn = true;

        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser!);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin():Boolean{
    if (!this.roles) //this.roles== undefiened
      return false;

    return (this.roles.indexOf('ADMIN') >-1);
  }

  setLoggedUserFromLocalStorage(login : string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(email :string){
    this.users.forEach((curUser) => {
      if( curUser.email == email ) {
      this.roles = curUser.roles;
      }
    })
  }
}
