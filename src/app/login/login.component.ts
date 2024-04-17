import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { Response } from '../model/response.model';

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
    this.authService.signIn(this.user).subscribe({
      next: (response) => {
        let jwtToken = response.body?.data?.accesToken!;

        this.authService.saveToken(jwtToken);
        this.router.navigate(["/"])

      },
      error: (err: any) => {
        console.log("error: ", err)
        this.erreur = 1;
      }
    });
  }

}
