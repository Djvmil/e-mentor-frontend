import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit{
  title = "E-Mentor Frontend Page Register"
  user: User;

  constructor(){
    this.user = new User()

  }

  ngOnInit(): void{

  }


  register(){

  }

}
