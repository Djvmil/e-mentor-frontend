import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{
  title = "E-Mentor Frontend Page Register"
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


  onSignUp(){
    console.log("onSignUp", this.user)

  }

}
