import { Component } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user?: User;
  test : Date = new Date();
  focus: any;
  focus1: any;
  focus2: any;

  constructor(){

  }

  ngOnInit(): void{
    this.user = new User()

  }


  onSignIn(){

    console.log("onSignIn", this.user)

  }
}
