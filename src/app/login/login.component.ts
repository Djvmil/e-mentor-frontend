import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = new User()
  test : Date = new Date();
  focus: any;
  focus1: any;
  focus2: any;
  erreur = 0;
  constructor(private authService : AuthService,
    private router: Router){

  }

  ngOnInit(): void{

  }

  onSignIn(){
    console.log("onSignIn", this.user)
    let isValidUser: Boolean = this.authService.signIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      this.erreur = 1;//alert('Login ou mot de passe incorrecte!');

  }
}
